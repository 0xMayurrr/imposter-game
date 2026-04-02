import"./chunk-9wyra8hs.js";

// src/services/stitch-sdk/MockStitchSDK.ts
import { mock } from "bun:test";
function createMockScreen(overrides = {}) {
  return {
    screenId: "screen-1",
    projectId: "proj-1",
    title: "Screen One",
    getHtml: mock(() => Promise.resolve("https://cdn.example.com/html/screen-1")),
    getImage: mock(() => Promise.resolve("https://cdn.example.com/img/screen-1")),
    ...overrides
  };
}
function createMockProject(id, screens = [], overrides = {}) {
  return {
    id,
    projectId: id,
    title: "Mock Project",
    screens: mock(() => Promise.resolve(screens)),
    getScreen: mock((screenId) => Promise.resolve(screens.find((s) => s.screenId === screenId) ?? null)),
    ...overrides
  };
}
function createMockStitch(project) {
  return {
    project: mock((_id) => project),
    projects: mock(() => Promise.resolve([project])),
    createProject: mock((_title) => Promise.resolve(project)),
    callTool: mock(() => Promise.resolve({})),
    listTools: mock(() => Promise.resolve({ tools: [] }))
  };
}
export {
  createMockStitch,
  createMockScreen,
  createMockProject
};

//# debugId=17FE14DBB01B439E64756E2164756E21
