import React from 'react';
import type { SiteConfig } from '../../../lib/services/site/types.js';
import type { Stitch } from '@google/stitch-sdk';
interface SiteBuilderProps {
    projectId: string;
    client: Stitch;
    onExit: (config: SiteConfig | null, htmlContent?: Map<string, string>) => void;
}
export declare const SiteBuilder: React.FC<SiteBuilderProps>;
export {};
