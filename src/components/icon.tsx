import { css, cx } from "../styled-system/css";
import assets, { type IconName } from "../svg-assets";

type Props = {
	name: IconName;
	className?: string;
};

export const Icon = ({ name, className }: Props) => {
	const SvgIcon = assets[name];
	return <SvgIcon className={cx(css({ fill: "currentcolor" }), className)} />;
};
