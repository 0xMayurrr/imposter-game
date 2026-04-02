import { z } from 'zod';
export declare const ListScreensInputSchema: z.ZodObject<{
    projectId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    projectId: string;
}, {
    projectId: string;
}>;
export type ListScreensInput = z.infer<typeof ListScreensInputSchema>;
export declare const ListScreensErrorCode: z.ZodEnum<["PROJECT_NOT_FOUND", "SCREENS_FETCH_FAILED"]>;
export type ListScreensErrorCode = z.infer<typeof ListScreensErrorCode>;
export type ListScreensSuccess = {
    success: true;
    projectId: string;
    screens: Array<{
        screenId: string;
        title: string;
        suggestedRoute: string;
        hasHtml: boolean;
    }>;
};
export type ListScreensFailure = {
    success: false;
    error: {
        code: ListScreensErrorCode;
        message: string;
        recoverable: boolean;
    };
};
export type ListScreensResult = ListScreensSuccess | ListScreensFailure;
export interface ListScreensSpec {
    execute(input: ListScreensInput): Promise<ListScreensResult>;
}
