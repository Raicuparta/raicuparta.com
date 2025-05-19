import crypto from "node:crypto";
import fs from "node:fs/promises";
import sharp from "sharp";
import sharpIco from "sharp-ico";
import { serverUserAgent } from "../helpers/constants";

interface Props extends React.ComponentProps<"img"> {
	src: string;
	alt: string;
	width?: number;
	height?: number;
	quality?: number;
}

export async function Image({
	src,
	alt,
	width,
	height,
	quality,
	...props
}: Props) {
	const optimizedImage = await optimizeImage(src, width, height, quality);

	return (
		<img
			{...props}
			alt={alt}
			src={optimizedImage.path}
			height={height ?? optimizedImage.height}
			width={width ?? optimizedImage.width}
		/>
	);
}

async function optimizeImage(
	src: string,
	width?: number,
	height?: number,
	quality = 75,
) {
	try {
		const fileName = `${crypto.createHash("md5").update(`${src}${width}${height}${quality}`).digest("hex")}.webp`;
		const outputFolder = "optimized";
		const publicFolder = `./public/${outputFolder}`;
		await fs.mkdir(publicFolder, { recursive: true });
		const outputPath = `${publicFolder}/${fileName}`;

		const sharpImage = await getSharpImage(src);
		const imageOutput = await sharpImage
			.resize({
				width: width ? Math.round(width * 1.5) : undefined,
				height: height ? Math.round(height * 1.5) : undefined,
				fit: "inside",
			})
			.webp({
				quality,
			})
			.toFile(outputPath);

		return {
			// When using the path in img src we don't want to include the 'public' part.
			path: `/${outputFolder}/${fileName}`,
			width: imageOutput.width,
			height: imageOutput.height,
		};
	} catch (error) {
		throw new Error(`Failed to optimize image ${src}: ${error}`);
	}
}

async function getSharpImage(src: string): Promise<sharp.Sharp> {
	const isExternal = /^https?:\/\//.test(src);

	if (isExternal) {
		const response = await fetch(src, {
			redirect: "follow",
			headers: {
				"user-agent": serverUserAgent,
			},
		});
		if (!response.ok) {
			throw new Error(`Failed to fetch image: ${response.statusText}`);
		}
		const buffer = await response.arrayBuffer();

		if (src.endsWith(".ico")) {
			const sharpFromIco = sharpIco.sharpsFromIco(Buffer.from(buffer))[0];
			if (!sharpFromIco || "bpp" in sharpFromIco) {
				throw new Error(`Failed to decode ico from ${src}`);
			}
			return sharpFromIco;
		}

		return sharp(buffer);
	}
	const buffer = await fs.readFile(`./private/${src}`);
	return sharp(buffer);
}
