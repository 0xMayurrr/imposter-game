import {
  pLimit
} from "./chunk-a5xra9jn.js";
import"./chunk-9wyra8hs.js";

// src/commands/screens/handler.ts
class ScreensHandler {
  stitch;
  constructor(stitch) {
    this.stitch = stitch;
  }
  async execute(projectId) {
    try {
      const project = this.stitch.project(projectId);
      const screens = await project.screens();
      const limit = pLimit(3);
      const mapped = await Promise.all(screens.map((s) => limit(async () => {
        const codeUrl = await s.getHtml().catch(() => null);
        const imageUrl = await s.getImage().catch(() => null);
        return {
          screenId: s.screenId,
          title: s.title ?? s.screenId,
          hasCode: codeUrl !== null,
          codeUrl,
          hasImage: imageUrl !== null
        };
      })));
      const sorted = mapped.sort((a, b) => {
        if (a.hasCode !== b.hasCode)
          return a.hasCode ? -1 : 1;
        return a.title.localeCompare(b.title);
      });
      return { success: true, projectId, projectTitle: project.data?.title ?? projectId, screens: sorted };
    } catch (e) {
      return { success: false, error: e.message };
    }
  }
}
export {
  ScreensHandler
};

//# debugId=BA217A050135E6A764756E2164756E21
