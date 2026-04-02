import type { Stitch } from '@google/stitch-sdk';
import type { JsonServerSpec, JsonServerInput, JsonServerResult } from './spec.js';
export declare class JsonServerHandler implements JsonServerSpec {
    private readonly client;
    private readonly downloadHtml;
    constructor(client: Stitch, downloadHtml?: (url: string) => Promise<string>);
    execute(input: JsonServerInput): Promise<JsonServerResult>;
}
