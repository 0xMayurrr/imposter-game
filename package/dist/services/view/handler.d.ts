import { type ViewSpec, type ViewInput, type ViewResult } from './spec.js';
import { StitchToolClient } from '@google/stitch-sdk';
export declare class ViewHandler implements ViewSpec {
    private readonly client;
    constructor(client?: StitchToolClient);
    execute(input: ViewInput): Promise<ViewResult>;
}
