import type { ReactNode } from "react";
import ScrollResetter from "../components/scroll-resetter";
import { css } from "../styled-system/css";
import { token } from "../styled-system/tokens";

type RootLayoutProps = { children: ReactNode };

export default async function RootElement({ children }: RootLayoutProps) {
	return (
		<html
			lang="en"
			className={css({
				color: "darkWhite",
				fontWeight: "light",
				backgroundColor: "purple",
			})}
		>
			<head>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />
				<meta name="msapplication-TileColor" content={token("colors.purple")} />
				<meta name="theme-color" content={token("colors.purple")} />
			</head>
			<body data-version="1.0">
				<ScrollResetter />
				{children}
			</body>
		</html>
	);
}

export const getConfig = async () => {
	return {
		render: "static",
	} as const;
};
