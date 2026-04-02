import type { Stitch } from '@google/stitch-sdk';
import type { ListScreensSpec, ListScreensInput, ListScreensResult } from './spec.js';
export declare class ListScreensHandler implements ListScreensSpec {
    private readonly client;
    constructor(client: Stitch);
    execute(input: ListScreensInput): Promise<ListScreensResult>;
}
