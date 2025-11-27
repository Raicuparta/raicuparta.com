"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "waku";

// Waku has an auto-scroll option for navigation,
// but it scrolls immediately on click, instead of after navigation.
// That's a bit jarring since you see the page first scroll up and then
// load the next page a bit later. So I have my own thing for that.
// I tried to make a PR but it was bad: https://github.com/wakujs/waku/pull/1516
// And somene else's issue: https://github.com/wakujs/waku/issues/1437
export function ScrollResetter() {
	const { path } = useRouter();
	const previousPath = useRef(path);

	useEffect(() => {
		if (previousPath.current !== path) {
			previousPath.current = path;
			window.scrollTo(0, 0);
		}
	}, [path]);

	return null;
}
