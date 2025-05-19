import { css, cx } from "../styled-system/css";
import { type IconName, svgAssets } from "../svg-assets";

type Props = {
	name: IconName;
	className?: string;
};

export const Icon = ({ name, className }: Props) => {
	const SvgIcon = svgAssets[name];
	return <SvgIcon className={cx(css({ fill: "currentcolor" }), className)} />;
};
