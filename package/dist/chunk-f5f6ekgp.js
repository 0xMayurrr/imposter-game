import {
  StitchToolClient
} from "./chunk-dmrahbs1.js";
import"./chunk-c6ge431q.js";
import"./chunk-9wyra8hs.js";

// src/services/view/handler.ts
class ViewHandler {
  client;
  constructor(client = new StitchToolClient) {
    this.client = client;
  }
  async execute(input) {
    try {
      let data;
      if (input.projects) {
        data = await this.client.callTool("list_projects", {});
      } else if (input.name) {
        const projectMatch = input.name.match(/^projects\/([^/]+)$/);
        const screenMatch = input.name.match(/^projects\/([^/]+)\/screens\/([^/]+)$/);
        if (screenMatch) {
          data = await this.client.callTool("get_screen", {
            projectId: screenMatch[1],
            screenId: screenMatch[2]
          });
        } else if (projectMatch) {
          data = await this.client.callTool("get_project", {
            name: `projects/${projectMatch[1]}`
          });
        } else {
          throw new Error(`Invalid resource name format: ${input.name}`);
        }
      } else if (input.sourceScreen) {
        const screenMatch = input.sourceScreen.match(/^projects\/([^/]+)\/screens\/([^/]+)$/);
        if (screenMatch) {
          data = await this.client.callTool("get_screen", {
            projectId: screenMatch[1],
            screenId: screenMatch[2]
          });
        } else {
          throw new Error(`Invalid sourceScreen format: ${input.sourceScreen}`);
        }
      } else if (input.project && input.screen) {
        data = await this.client.callTool("get_screen", {
          projectId: input.project,
          screenId: input.screen
        });
      } else if (input.project) {
        data = await this.client.callTool("get_project", {
          name: `projects/${input.project}`
        });
      } else {
        return {
          success: false,
          error: {
            code: "INVALID_ARGS",
            message: "No valid view arguments provided. Use --projects, --name, --sourceScreen, or --project.",
            recoverable: false
          }
        };
      }
      if (data && data.contents && Array.isArray(data.contents)) {
        const contents = data.contents;
        const chunkSize = 1000;
        const results = [];
        for (let i = 0;i < contents.length; i += chunkSize) {
          const chunk = contents.slice(i, i + chunkSize).map((c) => {
            if (c.text) {
              try {
                const parsed = JSON.parse(c.text);
                return { ...c, text: undefined, data: parsed };
              } catch {
                return c;
              }
            }
            return c;
          });
          results.push(...chunk);
          if (i + chunkSize < contents.length) {
            await new Promise((resolve) => setImmediate(resolve));
          }
        }
        data.contents = results;
      }
      return {
        success: true,
        data
      };
    } catch (error) {
      return {
        success: false,
        error: {
          code: "FETCH_FAILED",
          message: error instanceof Error ? error.message : String(error),
          recoverable: false
        }
      };
    } finally {
      try {
        await this.client.close();
      } catch {}
    }
  }
}
export {
  ViewHandler
};

//# debugId=A85DAE0695978F2964756E2164756E21
