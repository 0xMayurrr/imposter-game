import type { Stitch } from '@google/stitch-sdk';
interface Screen {
    screenId: string;
    title: string;
    hasCode: boolean;
    codeUrl: string | null;
    hasImage: boolean;
}
type ScreensResult = {
    success: true;
    projectId: string;
    projectTitle: string;
    screens: Screen[];
} | {
    success: false;
    error: string;
};
export declare class ScreensHandler {
    private readonly stitch;
    constructor(stitch: Stitch);
    execute(projectId: string): Promise<ScreensResult>;
}
export {};
