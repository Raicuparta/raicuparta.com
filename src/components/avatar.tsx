"use client";

import { useState } from "react";
import { cx } from "../styled-system/css";
import { circle } from "../styled-system/patterns";
import { Icon } from "./icon";

type Props = {
	className?: string;
};

export const Avatar = ({ className }: Props) => {
	const [isFancy, setIsFancy] = useState(false);

	const onClickAvatar = () => {
		setIsFancy((currentIsFancy) => !currentIsFancy);
	};

	return (
		<span
			aria-hidden="true"
			className={cx(circle({ overflow: "hidden" }), className)}
			onClick={onClickAvatar}
		>
			<Icon name={isFancy ? "AvatarFancy" : "Avatar"} />
		</span>
	);
};
