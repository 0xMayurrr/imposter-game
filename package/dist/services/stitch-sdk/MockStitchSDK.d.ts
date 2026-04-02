import { mock } from 'bun:test';
export interface MockScreen {
    screenId: string;
    projectId: string;
    title?: string;
    getHtml: ReturnType<typeof mock>;
    getImage: ReturnType<typeof mock>;
}
export interface MockProject {
    id: string;
    projectId: string;
    title?: string;
    screens: ReturnType<typeof mock>;
    getScreen: ReturnType<typeof mock>;
}
export declare function createMockScreen(overrides?: Partial<MockScreen>): MockScreen;
export declare function createMockProject(id: string, screens?: MockScreen[], overrides?: Partial<MockProject>): MockProject;
export declare function createMockStitch(project: MockProject): any;
