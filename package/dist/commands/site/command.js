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

// src/commands/site/spec.ts
var SiteOptionsSchema = exports_external.object({
  project: exports_external.string(),
  output: exports_external.string().default("."),
  export: exports_external.boolean().default(false),
  listScreens: exports_external.boolean().default(false),
  routes: exports_external.string().optional()
});

// src/commands/site/command.ts
var command = {
  name: "site",
  description: "Build a structured site from Stitch screens",
  requiredOptions: [
    { flags: "-p, --project <id>", description: "Project ID" }
  ],
  options: [
    { flags: "-o, --output <dir>", description: "Output directory", defaultValue: "." },
    { flags: "-e, --export", description: "Export screen-to-route config as build_site JSON", defaultValue: false },
    { flags: "-l, --list-screens", description: "List all screens with suggested routes as JSON", defaultValue: false },
    { flags: "-r, --routes <json>", description: "JSON array of {screenId,route} mappings — generates site without TUI" }
  ],
  action: async (_args, options) => {
    try {
      const parsedOptions = SiteOptionsSchema.parse(options);
      const { SiteCommandHandler } = await import("../../chunk-ywax1akt.js");
      const handler = new SiteCommandHandler;
      await handler.execute({
        projectId: parsedOptions.project,
        outputDir: parsedOptions.output,
        export: parsedOptions.export,
        listScreens: parsedOptions.listScreens,
        routes: parsedOptions.routes
      });
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

//# debugId=CF45C32F9225794964756E2164756E21
