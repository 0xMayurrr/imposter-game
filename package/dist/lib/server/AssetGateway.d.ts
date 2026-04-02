import { Readable } from 'stream';
export declare class AssetGateway {
    private cacheDir;
    /**
     * Allowlist of hostname patterns for asset fetching.
     * Only HTTPS URLs matching these patterns are permitted.
     * Expand as needed for additional CDNs used in Stitch designs.
     */
    private static ALLOWED_HOST_PATTERNS;
    /**
     * Validates that a URL is safe to fetch:
     * - Must be HTTPS
     * - Hostname must match the allowlist
     */
    static validateAssetUrl(url: string): boolean;
    constructor(projectRoot?: string);
    init(): Promise<void>;
    private getHash;
    fetchAsset(url: string): Promise<{
        stream: Readable;
        contentType?: string;
    } | null>;
    rewriteCssUrls(css: string, baseUrl: string): string;
    rewriteHtmlForPreview(html: string): Promise<string>;
    /**
     * Maps common MIME types to file extensions.
     */
    private getExtensionFromContentType;
    rewriteHtmlForBuild(html: string): Promise<{
        html: string;
        assets: {
            url: string;
            filename: string;
        }[];
    }>;
    copyAssetTo(url: string, destPath: string): Promise<boolean>;
}
