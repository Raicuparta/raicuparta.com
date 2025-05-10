import { css } from "../styled-system/css";
import { hstack } from "../styled-system/patterns";

type Props = {
	children: React.ReactNode;
};

function Hr() {
	return (
		<hr
			className={css({
				height: "1px",
				backgroundColor: "darkWhite",
				flex: 1,
			})}
		/>
	);
}

export function BetweenHr(props: Props) {
	return (
		<div className={hstack({})}>
			<Hr />
			{props.children}
			<Hr />
		</div>
	);
}
