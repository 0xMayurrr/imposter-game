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

// src/commands/init/spec.ts
var InitOptionsSchema = exports_external.object({
  local: exports_external.boolean().default(false),
  yes: exports_external.boolean().default(false),
  defaults: exports_external.boolean().default(false),
  client: exports_external.string().optional(),
  transport: exports_external.string().optional(),
  json: exports_external.boolean().default(false)
});
var InitInputSchema = exports_external.object({
  local: exports_external.boolean().default(false),
  defaults: exports_external.boolean().default(false),
  autoVerify: exports_external.boolean().default(false),
  client: exports_external.string().optional(),
  transport: exports_external.string().optional(),
  json: exports_external.boolean().default(false)
});
var InitErrorCode = exports_external.enum([
  "GCLOUD_SETUP_FAILED",
  "AUTH_FAILED",
  "PROJECT_SELECTION_FAILED",
  "API_CONFIG_FAILED",
  "CONFIG_GENERATION_FAILED",
  "USER_CANCELLED",
  "UNKNOWN_ERROR"
]);
var InitSuccess = exports_external.object({
  success: exports_external.literal(true),
  data: exports_external.object({
    projectId: exports_external.string(),
    mcpConfig: exports_external.string(),
    instructions: exports_external.string()
  })
});
var InitFailure = exports_external.object({
  success: exports_external.literal(false),
  error: exports_external.object({
    code: InitErrorCode,
    message: exports_external.string(),
    suggestion: exports_external.string().optional(),
    recoverable: exports_external.boolean()
  })
});

// src/commands/init/command.ts
var command = {
  name: "init",
  description: "Initialize authentication and MCP configuration",
  options: [
    { flags: "--local", description: "Install gcloud locally to project directory instead of user home", defaultValue: false },
    { flags: "-y, --yes", description: "Auto-approve verification commands", defaultValue: false },
    { flags: "--defaults", description: "Use default values for prompts", defaultValue: false },
    { flags: "-c, --client <client>", description: "MCP client to configure" },
    { flags: "-t, --transport <transport>", description: "Transport type (http or stdio)" },
    { flags: "--json", description: "Output result as JSON", defaultValue: false }
  ],
  action: async (_args, options) => {
    try {
      const parsedOptions = InitOptionsSchema.parse(options);
      const { InitHandler } = await import("../../chunk-8nv4wwv0.js");
      const handler = new InitHandler;
      const result = await handler.execute({
        local: parsedOptions.local,
        defaults: parsedOptions.defaults,
        autoVerify: parsedOptions.yes,
        client: parsedOptions.client,
        transport: parsedOptions.transport,
        json: parsedOptions.json
      });
      if (!result.success) {
        if (parsedOptions.json) {
          console.log(JSON.stringify(result, null, 2));
        } else {
          console.error(theme.red(`
${icons.error} Setup failed: ${result.error.message}`));
          if (result.error.suggestion) {
            console.error(theme.gray(`  ${result.error.suggestion}`));
          }
        }
        process.exit(1);
      }
      process.exit(0);
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

//# debugId=E68BBE15F098BE4C64756E2164756E21
