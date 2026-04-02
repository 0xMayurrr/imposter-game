import {
  pLimit
} from "./chunk-a5xra9jn.js";
import"./chunk-9wyra8hs.js";

// src/commands/serve/handler.ts
class ServeHandler {
  stitch;
  constructor(stitch) {
    this.stitch = stitch;
  }
  async execute(projectId) {
    try {
      const project = this.stitch.project(projectId);
      const screens = await project.screens();
      const limit = pLimit(3);
      const withHtml = await Promise.all(screens.map((s) => limit(async () => {
        const codeUrl = await s.getHtml().catch(() => null);
        return { screenId: s.screenId, title: s.title ?? s.screenId, codeUrl };
      })));
      const filtered = withHtml.filter((s) => s.codeUrl !== null).sort((a, b) => a.title.localeCompare(b.title));
      return {
        success: true,
        projectId,
        projectTitle: project.data?.title ?? projectId,
        screens: filtered
      };
    } catch (e) {
      return {
        success: false,
        error: { code: "SCREENS_FETCH_FAILED", message: e.message, recoverable: false }
      };
    }
  }
}
export {
  ServeHandler
};

//# debugId=0608323AFA1B550164756E2164756E21
