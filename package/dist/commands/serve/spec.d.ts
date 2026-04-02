import { z } from 'zod';
export declare const ServeOptionsSchema: z.ZodObject<{
    project: z.ZodString;
    listScreens: z.ZodDefault<z.ZodBoolean>;
    json: z.ZodDefault<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    project: string;
    json: boolean;
    listScreens: boolean;
}, {
    project: string;
    json?: boolean | undefined;
    listScreens?: boolean | undefined;
}>;
export type ServeOptions = z.infer<typeof ServeOptionsSchema>;
export declare const ServeErrorCode: z.ZodEnum<["SCREENS_FETCH_FAILED"]>;
export type ServeErrorCode = z.infer<typeof ServeErrorCode>;
export type ServeSuccess = {
    success: true;
    projectId: string;
    projectTitle: string;
    screens: Array<{
        screenId: string;
        title: string;
        codeUrl: string;
    }>;
};
export type ServeFailure = {
    success: false;
    error: {
        code: ServeErrorCode;
        message: string;
        recoverable: boolean;
    };
};
export type ServeResult = ServeSuccess | ServeFailure;
export interface ServeSpec {
    execute(projectId: string): Promise<ServeResult>;
}
