import type { Stitch } from '@google/stitch-sdk';
interface SiteCommandOptions {
    projectId: string;
    outputDir?: string;
    export?: boolean;
    listScreens?: boolean;
    routes?: string;
}
export declare class SiteCommandHandler {
    private client;
    constructor(client?: Stitch);
    execute(options: SiteCommandOptions): Promise<void>;
}
export {};
