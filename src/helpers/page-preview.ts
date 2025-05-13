import LinkPreview from "link-preview-js";

export async function getPagePreview(url: string) {
	return LinkPreview.getLinkPreview(url, {
		followRedirects: "follow",
		timeout: 20000,
		// headers: {
		// 	"user-agent": "googlebot",
		// },
	});
}
