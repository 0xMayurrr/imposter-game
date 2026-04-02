import type { Stitch } from '@google/stitch-sdk';
import type { GenerateSpec, GenerateInput, GenerateResult } from './spec.js';
export declare class GenerateHandler implements GenerateSpec {
    private readonly client;
    private readonly fetchHtml;
    constructor(client: Stitch, fetchHtml?: (url: string) => Promise<string>);
    execute(input: GenerateInput): Promise<GenerateResult>;
}
