import { css } from "../styled-system/css";
import { stack } from "../styled-system/patterns";
import { BetweenHr } from "./between-hr";

type Props = {
	children: React.ReactNode;
	title?: string;
	description?: string;
	id: string;
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

export const MainPageSection = (props: Props) => (
	<div className={stack({ lineHeight: 1.5, gap: 4 })} id={props.id}>
		{props.title && (
			<BetweenHr>
				<h2
					className={css({
						color: "white",
						fontSize: "2xl",
						fontWeight: "normal",
						textAlign: "center",
						lineHeight: 0.8,
					})}
				>
					{props.title}
				</h2>
			</BetweenHr>
		)}
		{props.description && <p>{props.description}</p>}
		<div className={stack()}>{props.children}</div>
	</div>
);
