import type { ComponentProps } from "react";
import { Link } from "waku";
import { css, cx } from "../styled-system/css";

const defaultStyle = css({
	_hover: {
		filter: "brightness(125%)",
	},
});

type Props = {
	href: string;
	className?: string;
	title?: string;
	children: React.ReactNode;
};

export function ButtonLink({ href, ...props }: Props) {
	const isExternal = /^https?:\/\//.test(href);
	if (isExternal) {
		return <ButtonLinkExternal href={href} {...props} />;
	}
	isInternalHref(href);
	return <ButtonLinkInternal to={href} {...props} />;
}

function ButtonLinkInternal({
	children,
	className,
	...props
}: ComponentProps<typeof Link>) {
	return (
		<Link
			// Waku's auto-scroll disabled and done in scorll-resetter.tsx instead.
			scroll={false}
			unstable_prefetchOnView
			className={cx(defaultStyle, className)}
			{...props}
		>
			{children}
		</Link>
	);
}

function ButtonLinkExternal({
	children,
	className,
	...props
}: ComponentProps<"a">) {
	return (
		<a
			className={cx(defaultStyle, className)}
			target="_blank"
			rel="noopener"
			{...props}
		>
			{children}
		</a>
	);
}

function isInternalHref(href: string): asserts href is `/${string}` {
	if (!href.startsWith("/")) {
		throw new Error(
			`ButtonLink href must start with / for internal links, or http(s):// for external. Got: ${href}`,
		);
	}
}
