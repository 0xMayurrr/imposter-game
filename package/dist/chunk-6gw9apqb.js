// src/commands/site/utils/fetchWithRetry.ts
async function fetchWithRetry(url, maxRetries = 4, maxBackoffMs = 8000) {
  for (let attempt = 0;attempt <= maxRetries; attempt++) {
    const response = await fetch(url);
    if (response.ok) {
      return await response.text();
    }
    if (response.status === 429 && attempt < maxRetries) {
      const backoff = Math.min(1000 * 2 ** attempt, maxBackoffMs);
      await new Promise((r) => setTimeout(r, backoff));
      continue;
    }
    throw new Error(`Failed to fetch content: ${response.statusText}`);
  }
  throw new Error(`Failed to fetch content after ${maxRetries + 1} attempts`);
}

export { fetchWithRetry };

//# debugId=F07D33AA3782D0A764756E2164756E21
