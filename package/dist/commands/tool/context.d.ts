import type { StitchToolClient, Stitch } from '@google/stitch-sdk';
import type { ToolCommandInput, ToolCommandResult, VirtualTool } from './spec.js';
export interface ToolContext {
    input: ToolCommandInput;
    client: StitchToolClient;
    stitch: Stitch;
    virtualTools: VirtualTool[];
    parsedArgs?: Record<string, any>;
    result?: ToolCommandResult;
}
