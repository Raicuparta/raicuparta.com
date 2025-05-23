import { websiteUrl } from "../helpers/constants";
import { token } from "../styled-system/tokens";

type Props = {
	route: string;
	description?: string;
	title: string;
	imageWidth: number;
	imageHeight?: number;
	imageUrl: string;
	largeImage?: boolean;
	children?: React.ReactNode;
};

export const PageHead = (props: Props) => {
	const pageUrl = `${websiteUrl}${props.route}`;

	return (
		<>
			<title>{props.title}</title>
			{props.description && (
				<meta name="description" content={props.description} />
			)}
			<meta property="og:title" content={props.title} />
			<meta property="og:description" content={props.description} />
			<meta property="og:url" content={pageUrl} />
			<link rel="canonical" href={pageUrl} />
			<meta property="og:site_name " content={props.title} />
			<meta property="og:image" content={props.imageUrl} />
			<meta property="twitter:image" content={props.imageUrl} />
			<meta
				name="twitter:card"
				content={props.largeImage ? "summary_large_image" : "summary"}
			/>
			<meta property="og:image:width" content={`${props.imageWidth}px`} />
			<meta
				property="og:image:height"
				content={`${props.imageHeight || props.imageWidth}px`}
			/>
			<meta name="theme-color" content={token("colors.purple")} />
			{props.children}
		</>
	);
};
