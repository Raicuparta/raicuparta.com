import LinkPreview from "link-preview-js";

export async function getPagePreview(url: string) {
	return LinkPreview.getLinkPreview(url, {
		followRedirects: "follow",
		timeout: 20000,
		headers: {
			"user-agent":
				"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
		},
	});
}
