import { StitchViteServer } from '../../../lib/server/vite/StitchViteServer.js';
import type { UIScreen } from '../../../lib/services/site/types.js';
export type HydrationStatus = 'idle' | 'downloading' | 'ready' | 'error';
export type FetchContentFn = (url: string) => Promise<string>;
export declare function useProjectHydration(screens: UIScreen[], server: StitchViteServer | null, fetchContent: FetchContentFn, activeScreenId?: string): {
    hydrationStatus: HydrationStatus;
    progress: number;
    htmlContent: Map<string, string>;
};
