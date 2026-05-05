import LinkPreview from "link-preview-js";
import { serverUserAgent } from "./constants";

const MAX_RETRIES = 3;
const RETRY_DELAY_MS = 1000;
const TIMEOUT_MS = 20000;

export async function getPagePreview(url: string, followRedirects = true) {
	let lastError: Error | null = null;

	for (let attempt = 0; attempt < MAX_RETRIES; attempt++) {
		try {
			return await LinkPreview.getLinkPreview(url, {
				followRedirects: followRedirects ? "follow" : "error",
				timeout: TIMEOUT_MS,
				headers: { "user-agent": serverUserAgent },
			});
		} catch (error) {
			lastError =
				error instanceof Error
					? error
					: new Error(`Failed to fetch preview: ${JSON.stringify(error)}`);

			if (attempt < MAX_RETRIES - 1) {
				const delayMs = RETRY_DELAY_MS * Math.pow(2, attempt);
				await new Promise((resolve) => setTimeout(resolve, delayMs));
			}
		}
	}

	throw lastError || new Error(`Failed to fetch preview after ${MAX_RETRIES} attempts: ${url}`);
}
