import {
  icons,
  theme
} from "../../chunk-kbtqrkwh.js";
import"../../chunk-3sfn889r.js";
import {
  exports_external
} from "../../chunk-c6ge431q.js";
import {
  __require
} from "../../chunk-9wyra8hs.js";

// src/commands/proxy/spec.ts
var ProxyOptionsSchema = exports_external.object({
  transport: exports_external.enum(["stdio", "sse"]).default("stdio"),
  port: exports_external.number().optional(),
  debug: exports_external.boolean().default(false)
});

// src/commands/proxy/command.ts
var command = {
  name: "proxy",
  description: "Start the Stitch MCP proxy server",
  options: [
    { flags: "--transport <type>", description: "Transport type (stdio)", defaultValue: "stdio" },
    { flags: "--port <number>", description: "Port number", fn: (val) => parseInt(val, 10) },
    { flags: "--debug", description: "Enable debug logging to file", defaultValue: false }
  ],
  action: async (_args, options) => {
    try {
      const parsedOptions = ProxyOptionsSchema.parse(options);
      const { ProxyCommandHandler } = await import("../../chunk-6wvst7z8.js");
      const handler = new ProxyCommandHandler;
      const result = await handler.execute({
        port: parsedOptions.port,
        debug: parsedOptions.debug
      });
      if (!result.success) {
        console.error(theme.red(`
${icons.error} Proxy server error: ${result.error?.message}`));
        process.exit(1);
      }
    } catch (error) {
      console.error(theme.red(`
${icons.error} Unexpected error:`), error);
      process.exit(1);
    }
  }
};
export {
  command
};

//# debugId=DD5AA00EE9D7A7BD64756E2164756E21
