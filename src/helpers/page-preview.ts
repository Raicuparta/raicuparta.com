import LinkPreview from "link-preview-js";
import { serverUserAgent } from "./constants";

const MAX_RETRIES = 3;
const RETRY_DELAY_MS = 1000;
const TIMEOUT_MS = 20000;

export async function getPagePreview(url: string, followRedirects = true) {
	let lastError: Error | null = null;

	console.log(`[page-preview] Fetching: ${url}`);

	for (let attempt = 0; attempt < MAX_RETRIES; attempt++) {
		try {
			const result = await LinkPreview.getLinkPreview(url, {
				followRedirects: followRedirects ? "follow" : "error",
				timeout: TIMEOUT_MS,
				headers: {
					"user-agent": serverUserAgent,
				},
			});
			console.log(
				`[page-preview] Raw result for ${url}: ${JSON.stringify(result)}`,
			);
			console.log(`[page-preview] Success for ${url}: "${("title" in result && result.title) || "(no title)"}"`);
			return result;
		} catch (error) {
			lastError =
				error instanceof Error
					? error
					: new Error(
							`Failed to fetch preview: ${JSON.stringify(error)}`,
						);

			console.warn(
				`[page-preview] Attempt ${attempt + 1}/${MAX_RETRIES} failed for ${url}: ${lastError.message}`,
			);

			if (attempt < MAX_RETRIES - 1) {
				const delayMs = RETRY_DELAY_MS * Math.pow(2, attempt);
				console.log(
					`[page-preview] Retry ${attempt + 1}/${MAX_RETRIES - 1} for ${url} in ${delayMs}ms`,
				);
				await new Promise((resolve) => setTimeout(resolve, delayMs));
			}
		}
	}

	const finalError = lastError || new Error(`Failed to fetch preview after ${MAX_RETRIES} attempts: ${url}`);
	console.error(`[page-preview] All retries exhausted for ${url}: ${finalError.message}`);
	throw finalError;
}
