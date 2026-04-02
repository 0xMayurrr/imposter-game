/**
 * Fetches text content from a URL with exponential backoff retry on 429 (Too Many Requests).
 * Non-429 errors are thrown immediately without retrying.
 *
 * @param url - The URL to fetch
 * @param maxRetries - Maximum number of retries (default: 4, so 5 total attempts)
 * @param maxBackoffMs - Maximum backoff delay in ms (default: 8000)
 * @returns The response body as text
 */
export declare function fetchWithRetry(url: string, maxRetries?: number, maxBackoffMs?: number): Promise<string>;
