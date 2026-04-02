import {
  StitchViteServer
} from "./chunk-ststnnry.js";
import"./chunk-abf1r0jh.js";
import {
  downloadText
} from "./chunk-34w2wfyp.js";
import"./chunk-akd997ec.js";
import {
  pLimit
} from "./chunk-a5xra9jn.js";
import"./chunk-4jygt4d6.js";
import"./chunk-tz7wnw4s.js";
import"./chunk-9wyra8hs.js";

// src/commands/serve/json-server/handler.ts
class JsonServerHandler {
  client;
  downloadHtml;
  constructor(client, downloadHtml = downloadText) {
    this.client = client;
    this.downloadHtml = downloadHtml;
  }
  async execute(input) {
    let sdkScreens;
    try {
      const project = this.client.project(input.projectId);
      sdkScreens = await project.screens();
    } catch (e) {
      return {
        success: false,
        error: { code: "SCREENS_FETCH_FAILED", message: e.message, recoverable: false }
      };
    }
    const server = new StitchViteServer;
    let baseUrl;
    try {
      baseUrl = await server.start(0);
    } catch (e) {
      return {
        success: false,
        error: { code: "SERVER_START_FAILED", message: e.message, recoverable: false }
      };
    }
    const limit = pLimit(3);
    const screens = [];
    await Promise.all(sdkScreens.map((s) => limit(async () => {
      try {
        const codeUrl = await s.getHtml();
        if (codeUrl) {
          const html = await this.downloadHtml(codeUrl);
          server.mount(`/screens/${s.screenId}`, html);
        }
        screens.push({
          screenId: s.screenId,
          title: s.title ?? s.screenId,
          url: `${baseUrl}/screens/${s.screenId}`
        });
      } catch {}
    })));
    screens.sort((a, b) => a.title.localeCompare(b.title));
    return { success: true, url: baseUrl, screens };
  }
}
export {
  JsonServerHandler
};

//# debugId=48EA0F841F0EE79D64756E2164756E21
