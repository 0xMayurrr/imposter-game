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

// src/commands/serve/spec.ts
var ServeOptionsSchema = exports_external.object({
  project: exports_external.string(),
  listScreens: exports_external.boolean().default(false),
  json: exports_external.boolean().default(false)
});
var ServeErrorCode = exports_external.enum([
  "SCREENS_FETCH_FAILED"
]);

// src/commands/serve/list-screens/spec.ts
var ListScreensInputSchema = exports_external.object({
  projectId: exports_external.string().min(1, "projectId is required")
});
var ListScreensErrorCode = exports_external.enum([
  "SCREENS_FETCH_FAILED"
]);

// src/commands/serve/json-server/spec.ts
var JsonServerInputSchema = exports_external.object({
  projectId: exports_external.string().min(1, "projectId is required")
});
var JsonServerErrorCode = exports_external.enum([
  "SCREENS_FETCH_FAILED",
  "SERVER_START_FAILED"
]);

// src/commands/serve/command.ts
var command = {
  name: "serve",
  description: "Serve project HTML screens via local web server",
  requiredOptions: [
    { flags: "-p, --project <id>", description: "Project ID" }
  ],
  options: [
    { flags: "-l, --list-screens", description: "List all screens with their server paths as JSON", defaultValue: false },
    { flags: "--json", description: "Start server in non-interactive mode and output JSON when ready", defaultValue: false }
  ],
  action: async (_args, options) => {
    try {
      const parsedOptions = ServeOptionsSchema.parse(options);
      const { stitch } = await import("../../chunk-pz31v3ma.js");
      if (parsedOptions.listScreens) {
        const input = ListScreensInputSchema.safeParse({ projectId: parsedOptions.project });
        if (!input.success) {
          console.log(JSON.stringify({ success: false, error: { code: "INVALID_INPUT", message: input.error.issues[0]?.message } }, null, 2));
          process.exit(1);
        }
        const { ListScreensHandler } = await import("../../chunk-e9881zy4.js");
        const result2 = await new ListScreensHandler(stitch).execute(input.data);
        console.log(JSON.stringify(result2, null, 2));
        process.exit(result2.success ? 0 : 1);
      }
      if (parsedOptions.json) {
        const input = JsonServerInputSchema.safeParse({ projectId: parsedOptions.project });
        if (!input.success) {
          console.log(JSON.stringify({ success: false, error: { code: "INVALID_INPUT", message: input.error.issues[0]?.message } }, null, 2));
          process.exit(1);
        }
        const { JsonServerHandler } = await import("../../chunk-efd0rm6g.js");
        const result2 = await new JsonServerHandler(stitch).execute(input.data);
        console.log(JSON.stringify(result2, null, 2));
        if (!result2.success)
          process.exit(1);
        await new Promise(() => {});
        return;
      }
      const { ServeHandler } = await import("../../chunk-w8075wyx.js");
      const { ServeView } = await import("../../chunk-wq60thjn.js");
      const { render } = await import("../../chunk-t092ehvp.js");
      const React = await import("../../chunk-edp6faw2.js");
      const handler = new ServeHandler(stitch);
      const result = await handler.execute(parsedOptions.project);
      if (!result.success) {
        console.error(theme.red(`
${icons.error} Failed: ${result.error.message}`));
        process.exit(1);
      }
      if (result.screens.length === 0) {
        console.log(theme.yellow(`
${icons.warning} No screens with HTML code found in this project.`));
        process.exit(0);
      }
      const createElement = React.createElement || React.default.createElement;
      const instance = render(createElement(ServeView, {
        projectId: result.projectId,
        projectTitle: result.projectTitle,
        screens: result.screens
      }));
      await instance.waitUntilExit();
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

//# debugId=858784717F8E4F8B64756E2164756E21
