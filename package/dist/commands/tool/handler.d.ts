import { StitchToolClient } from '@google/stitch-sdk';
import type { Stitch } from '@google/stitch-sdk';
import { runSteps } from '../../framework/StepRunner.js';
import type { ToolCommandInput, ToolCommandResult, VirtualTool } from './spec.js';
import { ListToolsStep } from './steps/ListToolsStep.js';
import { ShowSchemaStep } from './steps/ShowSchemaStep.js';
import { ParseArgsStep } from './steps/ParseArgsStep.js';
import { ValidateToolStep } from './steps/ValidateToolStep.js';
import { ExecuteToolStep } from './steps/ExecuteToolStep.js';
export declare const deps: {
    runSteps: typeof runSteps;
    ListToolsStep: typeof ListToolsStep;
    ShowSchemaStep: typeof ShowSchemaStep;
    ParseArgsStep: typeof ParseArgsStep;
    ValidateToolStep: typeof ValidateToolStep;
    ExecuteToolStep: typeof ExecuteToolStep;
};
export declare class ToolCommandHandler {
    private client;
    private stitchInstance;
    private tools;
    private steps;
    constructor(client?: StitchToolClient, tools?: VirtualTool[], stitchInstance?: Stitch);
    execute(input: ToolCommandInput): Promise<ToolCommandResult>;
}
