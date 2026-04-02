import {
  pLimit
} from "./chunk-a5xra9jn.js";
import"./chunk-9wyra8hs.js";

// src/commands/serve/list-screens/handler.ts
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
          path: `/screens/${s.screenId}`,
          hasHtml: htmlUrl !== null
        };
      })));
      return { success: true, projectId: input.projectId, screens };
    } catch (e) {
      return {
        success: false,
        error: { code: "SCREENS_FETCH_FAILED", message: e.message, recoverable: false }
      };
    }
  }
}
export {
  ListScreensHandler
};

//# debugId=2AE76803A4316C1D64756E2164756E21
