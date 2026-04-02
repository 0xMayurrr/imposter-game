import type { Stitch } from '@google/stitch-sdk';
import type { ServeSpec, ServeResult } from './spec.js';
export declare class ServeHandler implements ServeSpec {
    private readonly stitch;
    constructor(stitch: Stitch);
    execute(projectId: string): Promise<ServeResult>;
}
