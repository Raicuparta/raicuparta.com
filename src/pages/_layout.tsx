import type { ReactNode } from "react";
import { css } from "../styled-system/css";
import "../styles.css";

type RootLayoutProps = { children: ReactNode };

export default async function RootLayout({ children }: RootLayoutProps) {
	return (
		<main>
			<div className={css({ maxWidth: "3xl", padding: 4, margin: "auto" })}>
				{children}
			</div>
		</main>
	);
}

export const getConfig = async () => {
	return {
		render: "static",
	} as const;
};
