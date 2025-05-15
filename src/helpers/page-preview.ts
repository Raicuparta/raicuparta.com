import LinkPreview from "link-preview-js";
import { serverUserAgent } from "./constants";

export async function getPagePreview(url: string, followRedirects = true) {
	return LinkPreview.getLinkPreview(url, {
		followRedirects: followRedirects ? "follow" : "error",
		timeout: 20000,
		headers: {
			"user-agent": serverUserAgent,
		},
	});
}
