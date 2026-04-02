import { z } from 'zod';
export declare const JsonServerInputSchema: z.ZodObject<{
    projectId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    projectId: string;
}, {
    projectId: string;
}>;
export type JsonServerInput = z.infer<typeof JsonServerInputSchema>;
export declare const JsonServerErrorCode: z.ZodEnum<["SCREENS_FETCH_FAILED", "SERVER_START_FAILED"]>;
export type JsonServerErrorCode = z.infer<typeof JsonServerErrorCode>;
export type JsonServerReady = {
    success: true;
    url: string;
    screens: Array<{
        screenId: string;
        title: string;
        url: string;
    }>;
};
export type JsonServerFailure = {
    success: false;
    error: {
        code: JsonServerErrorCode;
        message: string;
        recoverable: boolean;
    };
};
export type JsonServerResult = JsonServerReady | JsonServerFailure;
export interface JsonServerSpec {
    execute(input: JsonServerInput): Promise<JsonServerResult>;
}
