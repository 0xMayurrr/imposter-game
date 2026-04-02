import {
  SiteBuilder,
  SiteManifest
} from "./chunk-f6cq8r7x.js";
import {
  require_jsx_dev_runtime
} from "./chunk-krfqppg2.js";
import {
  AssetGateway
} from "./chunk-dyp9t5wf.js";
import {
  require_lib
} from "./chunk-abf1r0jh.js";
import {
  render_default
} from "./chunk-7y4xzvkz.js";
import"./chunk-4jwmvjb4.js";
import {
  fetchWithRetry
} from "./chunk-6gw9apqb.js";
import {
  stitch
} from "./chunk-0cd2xak4.js";
import {
  pLimit
} from "./chunk-a5xra9jn.js";
import"./chunk-nq68kghz.js";
import"./chunk-q6sv0243.js";
import"./chunk-3sfn889r.js";
import {
  exports_external
} from "./chunk-c6ge431q.js";
import {
  __toESM
} from "./chunk-9wyra8hs.js";

// src/lib/services/site/SiteService.ts
var import_fs_extra = __toESM(require_lib(), 1);
import path from "path";
class SiteService {
  static toUIScreens(screens) {
    return screens.filter((s) => s.htmlCode && s.htmlCode.downloadUrl).map((s) => ({
      id: s.name,
      title: s.title,
      downloadUrl: s.htmlCode.downloadUrl,
      status: "ignored",
      route: ""
    }));
  }
  static async generateSite(config, htmlContent, assetGateway, outputDir = ".") {
    await import_fs_extra.default.ensureDir(path.join(outputDir, "src/pages"));
    await import_fs_extra.default.ensureDir(path.join(outputDir, "src/layouts"));
    await import_fs_extra.default.ensureDir(path.join(outputDir, "public/assets"));
    const pkgJson = {
      name: "stitch-site",
      type: "module",
      version: "0.0.1",
      scripts: {
        dev: "astro dev",
        start: "astro dev",
        build: "astro build",
        preview: "astro preview",
        astro: "astro"
      },
      dependencies: {
        astro: "^5.0.0"
      }
    };
    await import_fs_extra.default.writeJson(path.join(outputDir, "package.json"), pkgJson, { spaces: 2 });
    const astroConfig = `import { defineConfig } from 'astro/config';
export default defineConfig({});`;
    await import_fs_extra.default.writeFile(path.join(outputDir, "astro.config.mjs"), astroConfig);
    const layout = `---
interface Props {
	title: string;
}

const { title } = Astro.props;
---

<!doctype html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="description" content="Astro description" />
		<meta name="viewport" content="width=device-width" />
		<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
		<meta name="generator" content={Astro.generator} />
		<title>{title}</title>
	</head>
	<body>
		<slot />
	</body>
</html>
`;
    await import_fs_extra.default.writeFile(path.join(outputDir, "src/layouts/Layout.astro"), layout);
    const limit = pLimit(10);
    const tasks = config.routes.map((route) => limit(async () => {
      if (route.status !== "included")
        return;
      const html = htmlContent.get(route.screenId);
      if (!html) {
        console.warn(`No HTML content found for screen ${route.screenId}`);
        return;
      }
      const { html: rewrittenHtml, assets } = await assetGateway.rewriteHtmlForBuild(html);
      const assetsDir = path.join(outputDir, "public/assets");
      for (const asset of assets) {
        await assetGateway.copyAssetTo(asset.url, path.join(assetsDir, asset.filename));
      }
      let filePath = route.route;
      if (filePath === "/") {
        filePath = "index";
      } else {
        if (filePath.startsWith("/"))
          filePath = filePath.substring(1);
      }
      const fullPath = path.join(outputDir, "src/pages", `${filePath}.astro`);
      await import_fs_extra.default.ensureDir(path.dirname(fullPath));
      await import_fs_extra.default.writeFile(fullPath, rewrittenHtml);
    }));
    await Promise.all(tasks);
  }
  static slugify(text) {
    return text.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
  }
}

// src/commands/site/utils/suggestRoute.ts
var HOME_SLUGS = new Set(["home", "landing", "landing-page", "index"]);
function suggestRoute(title) {
  const slug = title.toLowerCase().replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-").replace(/-+/g, "-");
  return HOME_SLUGS.has(slug) ? "/" : `/${slug}`;
}

// src/commands/site/list-screens/handler.ts
class ListScreensHandler {
  client;
  constructor(client) {
    this.client = client;
  }
  async execute(input) {
    try {
      const project = this.client.project(input.projectId);
      const sdkScreens = await project.screens();
      const limit = pLimit(3);
      const screens = await Promise.all(sdkScreens.map((s) => limit(async () => {
        const htmlUrl = await s.getHtml().catch(() => null);
        return {
          screenId: s.screenId,
          title: s.title ?? s.screenId,
          suggestedRoute: suggestRoute(s.title ?? s.screenId),
          hasHtml: htmlUrl !== null
        };
      })));
      return { success: true, projectId: input.projectId, screens };
    } catch (e) {
      return {
        success: false,
        error: {
          code: "SCREENS_FETCH_FAILED",
          message: e.message,
          recoverable: false
        }
      };
    }
  }
}

// src/commands/site/list-screens/spec.ts
var ListScreensInputSchema = exports_external.object({
  projectId: exports_external.string().min(1, "projectId is required")
});
var ListScreensErrorCode = exports_external.enum([
  "PROJECT_NOT_FOUND",
  "SCREENS_FETCH_FAILED"
]);

// src/commands/site/generate/handler.ts
class GenerateHandler {
  client;
  fetchHtml;
  constructor(client, fetchHtml = fetchWithRetry) {
    this.client = client;
    this.fetchHtml = fetchHtml;
  }
  async execute(input) {
    try {
      const project = this.client.project(input.projectId);
      const sdkScreens = await project.screens();
      const screenMap = new Map(sdkScreens.map((s) => [s.screenId, s]));
      const missingIds = input.routesJson.map((r) => r.screenId).filter((id) => !screenMap.has(id));
      if (missingIds.length > 0) {
        return {
          success: false,
          error: {
            code: "SCREEN_NOT_FOUND",
            message: `Screen IDs not found in project: ${missingIds.join(", ")}`,
            hint: `Run stitch site -p ${input.projectId} --list-screens to see available screen IDs.`,
            recoverable: true
          }
        };
      }
      const limit = pLimit(3);
      const htmlContent = new Map;
      const errors = [];
      await Promise.all(input.routesJson.map((r) => limit(async () => {
        const screen = screenMap.get(r.screenId);
        try {
          const htmlUrl = await screen.getHtml();
          const html = htmlUrl ? await this.fetchHtml(htmlUrl) : "";
          htmlContent.set(r.screenId, html);
        } catch (e) {
          errors.push(`${r.screenId}: ${e.message}`);
        }
      })));
      if (errors.length > 0) {
        return {
          success: false,
          error: {
            code: "HTML_FETCH_FAILED",
            message: `Failed to fetch HTML for screens: ${errors.join("; ")}`,
            recoverable: false
          }
        };
      }
      const config = {
        projectId: input.projectId,
        routes: input.routesJson.map((r) => ({ screenId: r.screenId, route: r.route, status: "included" }))
      };
      const assetGateway = new AssetGateway;
      await SiteService.generateSite(config, htmlContent, assetGateway, input.outputDir);
      return {
        success: true,
        outputDir: input.outputDir,
        pages: input.routesJson.map((r) => ({ screenId: r.screenId, route: r.route }))
      };
    } catch (e) {
      return {
        success: false,
        error: {
          code: "GENERATE_FAILED",
          message: e.message,
          recoverable: false
        }
      };
    }
  }
}

// src/commands/site/generate/spec.ts
var RouteEntrySchema = exports_external.object({
  screenId: exports_external.string().min(1, "screenId is required"),
  route: exports_external.string().startsWith("/", "route must start with /")
});
var RoutesJsonSchema = exports_external.string().transform((str, ctx) => {
  try {
    const parsed = JSON.parse(str);
    const result = exports_external.array(RouteEntrySchema).safeParse(parsed);
    if (!result.success) {
      ctx.addIssue({ code: exports_external.ZodIssueCode.custom, message: result.error.issues[0]?.message ?? "Invalid routes array" });
      return exports_external.NEVER;
    }
    return result.data;
  } catch {
    ctx.addIssue({ code: exports_external.ZodIssueCode.custom, message: "routes must be valid JSON" });
    return exports_external.NEVER;
  }
});
var GenerateInputSchema = exports_external.object({
  projectId: exports_external.string().min(1, "projectId is required"),
  routesJson: RoutesJsonSchema,
  outputDir: exports_external.string().default(".")
});
var GenerateErrorCode = exports_external.enum([
  "INVALID_ROUTES",
  "SCREEN_NOT_FOUND",
  "HTML_FETCH_FAILED",
  "GENERATE_FAILED"
]);

// src/commands/site/index.tsx
var jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);

class SiteCommandHandler {
  client;
  constructor(client = stitch) {
    this.client = client;
  }
  async execute(options) {
    if (options.listScreens) {
      const input = ListScreensInputSchema.safeParse({ projectId: options.projectId });
      if (!input.success) {
        console.log(JSON.stringify({ success: false, error: { code: "INVALID_INPUT", message: input.error.issues[0]?.message } }, null, 2));
        return;
      }
      const result = await new ListScreensHandler(this.client).execute(input.data);
      console.log(JSON.stringify(result, null, 2));
      return;
    }
    if (options.routes !== undefined) {
      const input = GenerateInputSchema.safeParse({
        projectId: options.projectId,
        routesJson: options.routes,
        outputDir: options.outputDir
      });
      if (!input.success) {
        console.log(JSON.stringify({ success: false, error: { code: "INVALID_INPUT", message: input.error.issues[0]?.message } }, null, 2));
        return;
      }
      const result = await new GenerateHandler(this.client).execute(input.data);
      console.log(JSON.stringify(result, null, 2));
      return;
    }
    if (options.export) {
      const project = this.client.project(options.projectId);
      const sdkScreens = await project.screens();
      const uiScreens = await Promise.all(sdkScreens.map(async (s) => ({
        id: s.screenId,
        title: s.title ?? s.screenId,
        status: "ignored",
        route: "",
        downloadUrl: await s.getHtml().catch(() => null)
      })));
      const validScreens = uiScreens.filter((s) => !!s.downloadUrl);
      const siteManifest = new SiteManifest(options.projectId);
      const saved = await siteManifest.load();
      for (const screen of validScreens) {
        const state = saved.get(screen.id);
        if (state?.status)
          screen.status = state.status;
        if (state?.route)
          screen.route = state.route;
      }
      const included = validScreens.filter((s) => s.status === "included");
      const exportData = {
        projectId: options.projectId,
        routes: included.map((s) => ({
          screenId: s.id,
          route: s.route
        }))
      };
      console.log(JSON.stringify(exportData, null, 2));
      return;
    }
    let resultConfig = null;
    let resultHtml;
    const { waitUntilExit } = render_default(/* @__PURE__ */ jsx_dev_runtime.jsxDEV(SiteBuilder, {
      projectId: options.projectId,
      client: this.client,
      onExit: (config, html) => {
        resultConfig = config;
        resultHtml = html;
      }
    }, undefined, false, undefined, this));
    await waitUntilExit();
    if (resultConfig && resultHtml) {
      console.log("Generating site...");
      const assetGateway = new AssetGateway;
      const outputDir = options.outputDir || ".";
      await SiteService.generateSite(resultConfig, resultHtml, assetGateway, outputDir);
      console.log("Site generated successfully!");
    } else {}
  }
}
export {
  SiteCommandHandler
};

//# debugId=38734F280B97272E64756E2164756E21
