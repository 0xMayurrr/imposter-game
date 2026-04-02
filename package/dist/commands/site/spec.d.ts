import { z } from 'zod';
export declare const SiteOptionsSchema: z.ZodObject<{
    project: z.ZodString;
    output: z.ZodDefault<z.ZodString>;
    export: z.ZodDefault<z.ZodBoolean>;
    listScreens: z.ZodDefault<z.ZodBoolean>;
    routes: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    project: string;
    output: string;
    listScreens: boolean;
    export: boolean;
    routes?: string | undefined;
}, {
    project: string;
    output?: string | undefined;
    listScreens?: boolean | undefined;
    export?: boolean | undefined;
    routes?: string | undefined;
}>;
export type SiteOptions = z.infer<typeof SiteOptionsSchema>;
