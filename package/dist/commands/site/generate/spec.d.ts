import { z } from 'zod';
export declare const GenerateInputSchema: z.ZodObject<{
    projectId: z.ZodString;
    routesJson: z.ZodEffects<z.ZodString, {
        screenId: string;
        route: string;
    }[], string>;
    outputDir: z.ZodDefault<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    projectId: string;
    routesJson: {
        screenId: string;
        route: string;
    }[];
    outputDir: string;
}, {
    projectId: string;
    routesJson: string;
    outputDir?: string | undefined;
}>;
export type GenerateInput = z.infer<typeof GenerateInputSchema>;
export declare const GenerateErrorCode: z.ZodEnum<["INVALID_ROUTES", "SCREEN_NOT_FOUND", "HTML_FETCH_FAILED", "GENERATE_FAILED"]>;
export type GenerateErrorCode = z.infer<typeof GenerateErrorCode>;
export type GenerateSuccess = {
    success: true;
    outputDir: string;
    pages: Array<{
        screenId: string;
        route: string;
    }>;
};
export type GenerateFailure = {
    success: false;
    error: {
        code: GenerateErrorCode;
        message: string;
        hint?: string;
        recoverable: boolean;
    };
};
export type GenerateResult = GenerateSuccess | GenerateFailure;
export interface GenerateSpec {
    execute(input: GenerateInput): Promise<GenerateResult>;
}
