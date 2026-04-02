import type { StitchProxy as StitchProxyType } from '@google/stitch-sdk';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
interface ProxyCommandInput {
    port?: number;
    debug?: boolean;
}
interface ProxyCommandResult {
    success: boolean;
    data?: {
        status: string;
    };
    error?: {
        code: string;
        message: string;
        recoverable: boolean;
    };
}
export declare class ProxyCommandHandler {
    private createProxy;
    private createTransport;
    constructor(deps?: {
        createProxy?: (opts: {
            apiKey?: string;
        }) => StitchProxyType;
        createTransport?: () => StdioServerTransport;
    });
    execute(input: ProxyCommandInput): Promise<ProxyCommandResult>;
}
export {};
