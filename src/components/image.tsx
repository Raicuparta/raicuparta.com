import crypto from "node:crypto";
import fs from "node:fs/promises";
import sharp from "sharp";
import sharpIco from "sharp-ico";

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
	const optimizedImagePath = await optimizeImage(src, width, height, quality);

	return (
		<img
			{...props}
			alt={alt}
			src={optimizedImagePath}
			height={height}
			width={width}
		/>
	);
}

async function optimizeImage(
	src: string,
	width?: number,
	height?: number,
	quality = 75,
): Promise<string> {
	try {
		const sharpImage = await getSharpImage(src);
		const fileName = `${crypto.createHash("md5").update(`${src}${width}${height}${quality}`).digest("hex")}.webp`;
		const outputFolder = "optimized";
		const publicFolder = `./public/${outputFolder}`;
		await fs.mkdir(publicFolder, { recursive: true });

		await sharpImage
			.resize({
				width,
				height,
				fit: "inside",
			})
			.webp({
				quality,
			})
			.toFile(`${publicFolder}/${fileName}`);

		// When using the path in img src we don't want to include the 'public' part.
		return `/${outputFolder}/${fileName}`;
	} catch (error) {
		throw new Error(`Failed to optimize image ${src}: ${error}`);
	}
}

async function fetchWithAndWithoutWww(url: string): Promise<Response> {
	const response = await fetch(url, {
		redirect: "follow",
	});
	if (response.ok) {
		console.log(`Fetched image from ${url}`);
		return response;
	}

	const urlWithoutWww = url.replace(/^https?:\/\/(www\.)?/, "https://");
	console.log(`Fetching image from ${urlWithoutWww}`);

	const responseWithoutWww = await fetch(urlWithoutWww, {
		redirect: "follow",
	});
	if (!responseWithoutWww.ok) {
		throw new Error(
			`Failed to fetch image ${urlWithoutWww}: ${response.statusText}`,
		);
	}
	return responseWithoutWww;
}

async function getSharpImage(src: string): Promise<sharp.Sharp> {
	const isExternal = /^https?:\/\//.test(src);

	if (isExternal) {
		const response = await fetchWithAndWithoutWww(src);
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
