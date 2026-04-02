import {
  SiteBuilder,
  SiteManifest
} from "./chunk-pjpdhh0f.js";
import {
  require_jsx_dev_runtime
} from "./chunk-krfqppg2.js";
import {
  render_default
} from "./chunk-t0xqfse1.js";
import"./chunk-4jwmvjb4.js";
import {
  AssetGateway
} from "./chunk-7xsar3mr.js";
import {
  require_lib
} from "./chunk-w8q7nsm7.js";
import"./chunk-6gw9apqb.js";
import {
  stitch
} from "./chunk-a1mk24q9.js";
import {
  pLimit
} from "./chunk-a5xra9jn.js";
import"./chunk-nq68kghz.js";
import"./chunk-54wv5ptt.js";
import"./chunk-3sfn889r.js";
import"./chunk-c6ge431q.js";
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

// src/commands/site/index.tsx
var jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);

class SiteCommandHandler {
  client;
  constructor(client = stitch) {
    this.client = client;
  }
  async execute(options) {
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

//# debugId=19687717CE98441C64756E2164756E21
