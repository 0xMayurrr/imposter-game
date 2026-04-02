import {
  StitchHandler,
  createSpinner
} from "./chunk-psmw9zpa.js";
import {
  ConsoleUI,
  GcloudHandler,
  getGcloudConfigPath,
  joinPath
} from "./chunk-zakq9pc0.js";
import {
  runSteps
} from "./chunk-f2hq6bfv.js";
import {
  icons,
  theme
} from "./chunk-kbtqrkwh.js";
import {
  __commonJS,
  __require,
  __toESM
} from "./chunk-9wyra8hs.js";

// node_modules/dotenv/lib/main.js
var require_main = __commonJS((exports, module) => {
  var fs = __require("fs");
  var path = __require("path");
  var os = __require("os");
  var crypto = __require("crypto");
  var TIPS = [
    "◈ encrypted .env [www.dotenvx.com]",
    "◈ secrets for agents [www.dotenvx.com]",
    "⌁ auth for agents [www.vestauth.com]",
    "⌘ custom filepath { path: '/custom/path/.env' }",
    "⌘ enable debugging { debug: true }",
    "⌘ override existing { override: true }",
    "⌘ suppress logs { quiet: true }",
    "⌘ multiple files { path: ['.env.local', '.env'] }"
  ];
  function _getRandomTip() {
    return TIPS[Math.floor(Math.random() * TIPS.length)];
  }
  function parseBoolean(value) {
    if (typeof value === "string") {
      return !["false", "0", "no", "off", ""].includes(value.toLowerCase());
    }
    return Boolean(value);
  }
  function supportsAnsi() {
    return process.stdout.isTTY;
  }
  function dim(text) {
    return supportsAnsi() ? `\x1B[2m${text}\x1B[0m` : text;
  }
  var LINE = /(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;
  function parse(src) {
    const obj = {};
    let lines = src.toString();
    lines = lines.replace(/\r\n?/mg, `
`);
    let match;
    while ((match = LINE.exec(lines)) != null) {
      const key = match[1];
      let value = match[2] || "";
      value = value.trim();
      const maybeQuote = value[0];
      value = value.replace(/^(['"`])([\s\S]*)\1$/mg, "$2");
      if (maybeQuote === '"') {
        value = value.replace(/\\n/g, `
`);
        value = value.replace(/\\r/g, "\r");
      }
      obj[key] = value;
    }
    return obj;
  }
  function _parseVault(options) {
    options = options || {};
    const vaultPath = _vaultPath(options);
    options.path = vaultPath;
    const result = DotenvModule.configDotenv(options);
    if (!result.parsed) {
      const err = new Error(`MISSING_DATA: Cannot parse ${vaultPath} for an unknown reason`);
      err.code = "MISSING_DATA";
      throw err;
    }
    const keys = _dotenvKey(options).split(",");
    const length = keys.length;
    let decrypted;
    for (let i = 0;i < length; i++) {
      try {
        const key = keys[i].trim();
        const attrs = _instructions(result, key);
        decrypted = DotenvModule.decrypt(attrs.ciphertext, attrs.key);
        break;
      } catch (error) {
        if (i + 1 >= length) {
          throw error;
        }
      }
    }
    return DotenvModule.parse(decrypted);
  }
  function _warn(message) {
    console.error(`⚠ ${message}`);
  }
  function _debug(message) {
    console.log(`┆ ${message}`);
  }
  function _log(message) {
    console.log(`◇ ${message}`);
  }
  function _dotenvKey(options) {
    if (options && options.DOTENV_KEY && options.DOTENV_KEY.length > 0) {
      return options.DOTENV_KEY;
    }
    if (process.env.DOTENV_KEY && process.env.DOTENV_KEY.length > 0) {
      return process.env.DOTENV_KEY;
    }
    return "";
  }
  function _instructions(result, dotenvKey) {
    let uri;
    try {
      uri = new URL(dotenvKey);
    } catch (error) {
      if (error.code === "ERR_INVALID_URL") {
        const err = new Error("INVALID_DOTENV_KEY: Wrong format. Must be in valid uri format like dotenv://:key_1234@dotenvx.com/vault/.env.vault?environment=development");
        err.code = "INVALID_DOTENV_KEY";
        throw err;
      }
      throw error;
    }
    const key = uri.password;
    if (!key) {
      const err = new Error("INVALID_DOTENV_KEY: Missing key part");
      err.code = "INVALID_DOTENV_KEY";
      throw err;
    }
    const environment = uri.searchParams.get("environment");
    if (!environment) {
      const err = new Error("INVALID_DOTENV_KEY: Missing environment part");
      err.code = "INVALID_DOTENV_KEY";
      throw err;
    }
    const environmentKey = `DOTENV_VAULT_${environment.toUpperCase()}`;
    const ciphertext = result.parsed[environmentKey];
    if (!ciphertext) {
      const err = new Error(`NOT_FOUND_DOTENV_ENVIRONMENT: Cannot locate environment ${environmentKey} in your .env.vault file.`);
      err.code = "NOT_FOUND_DOTENV_ENVIRONMENT";
      throw err;
    }
    return { ciphertext, key };
  }
  function _vaultPath(options) {
    let possibleVaultPath = null;
    if (options && options.path && options.path.length > 0) {
      if (Array.isArray(options.path)) {
        for (const filepath of options.path) {
          if (fs.existsSync(filepath)) {
            possibleVaultPath = filepath.endsWith(".vault") ? filepath : `${filepath}.vault`;
          }
        }
      } else {
        possibleVaultPath = options.path.endsWith(".vault") ? options.path : `${options.path}.vault`;
      }
    } else {
      possibleVaultPath = path.resolve(process.cwd(), ".env.vault");
    }
    if (fs.existsSync(possibleVaultPath)) {
      return possibleVaultPath;
    }
    return null;
  }
  function _resolveHome(envPath) {
    return envPath[0] === "~" ? path.join(os.homedir(), envPath.slice(1)) : envPath;
  }
  function _configVault(options) {
    const debug = parseBoolean(process.env.DOTENV_CONFIG_DEBUG || options && options.debug);
    const quiet = parseBoolean(process.env.DOTENV_CONFIG_QUIET || options && options.quiet);
    if (debug || !quiet) {
      _log("loading env from encrypted .env.vault");
    }
    const parsed = DotenvModule._parseVault(options);
    let processEnv = process.env;
    if (options && options.processEnv != null) {
      processEnv = options.processEnv;
    }
    DotenvModule.populate(processEnv, parsed, options);
    return { parsed };
  }
  function configDotenv(options) {
    const dotenvPath = path.resolve(process.cwd(), ".env");
    let encoding = "utf8";
    let processEnv = process.env;
    if (options && options.processEnv != null) {
      processEnv = options.processEnv;
    }
    let debug = parseBoolean(processEnv.DOTENV_CONFIG_DEBUG || options && options.debug);
    let quiet = parseBoolean(processEnv.DOTENV_CONFIG_QUIET || options && options.quiet);
    if (options && options.encoding) {
      encoding = options.encoding;
    } else {
      if (debug) {
        _debug("no encoding is specified (UTF-8 is used by default)");
      }
    }
    let optionPaths = [dotenvPath];
    if (options && options.path) {
      if (!Array.isArray(options.path)) {
        optionPaths = [_resolveHome(options.path)];
      } else {
        optionPaths = [];
        for (const filepath of options.path) {
          optionPaths.push(_resolveHome(filepath));
        }
      }
    }
    let lastError;
    const parsedAll = {};
    for (const path2 of optionPaths) {
      try {
        const parsed = DotenvModule.parse(fs.readFileSync(path2, { encoding }));
        DotenvModule.populate(parsedAll, parsed, options);
      } catch (e) {
        if (debug) {
          _debug(`failed to load ${path2} ${e.message}`);
        }
        lastError = e;
      }
    }
    const populated = DotenvModule.populate(processEnv, parsedAll, options);
    debug = parseBoolean(processEnv.DOTENV_CONFIG_DEBUG || debug);
    quiet = parseBoolean(processEnv.DOTENV_CONFIG_QUIET || quiet);
    if (debug || !quiet) {
      const keysCount = Object.keys(populated).length;
      const shortPaths = [];
      for (const filePath of optionPaths) {
        try {
          const relative = path.relative(process.cwd(), filePath);
          shortPaths.push(relative);
        } catch (e) {
          if (debug) {
            _debug(`failed to load ${filePath} ${e.message}`);
          }
          lastError = e;
        }
      }
      _log(`injecting env (${keysCount}) from ${shortPaths.join(",")} ${dim(`// tip: ${_getRandomTip()}`)}`);
    }
    if (lastError) {
      return { parsed: parsedAll, error: lastError };
    } else {
      return { parsed: parsedAll };
    }
  }
  function config(options) {
    if (_dotenvKey(options).length === 0) {
      return DotenvModule.configDotenv(options);
    }
    const vaultPath = _vaultPath(options);
    if (!vaultPath) {
      _warn(`you set DOTENV_KEY but you are missing a .env.vault file at ${vaultPath}`);
      return DotenvModule.configDotenv(options);
    }
    return DotenvModule._configVault(options);
  }
  function decrypt(encrypted, keyStr) {
    const key = Buffer.from(keyStr.slice(-64), "hex");
    let ciphertext = Buffer.from(encrypted, "base64");
    const nonce = ciphertext.subarray(0, 12);
    const authTag = ciphertext.subarray(-16);
    ciphertext = ciphertext.subarray(12, -16);
    try {
      const aesgcm = crypto.createDecipheriv("aes-256-gcm", key, nonce);
      aesgcm.setAuthTag(authTag);
      return `${aesgcm.update(ciphertext)}${aesgcm.final()}`;
    } catch (error) {
      const isRange = error instanceof RangeError;
      const invalidKeyLength = error.message === "Invalid key length";
      const decryptionFailed = error.message === "Unsupported state or unable to authenticate data";
      if (isRange || invalidKeyLength) {
        const err = new Error("INVALID_DOTENV_KEY: It must be 64 characters long (or more)");
        err.code = "INVALID_DOTENV_KEY";
        throw err;
      } else if (decryptionFailed) {
        const err = new Error("DECRYPTION_FAILED: Please check your DOTENV_KEY");
        err.code = "DECRYPTION_FAILED";
        throw err;
      } else {
        throw error;
      }
    }
  }
  function populate(processEnv, parsed, options = {}) {
    const debug = Boolean(options && options.debug);
    const override = Boolean(options && options.override);
    const populated = {};
    if (typeof parsed !== "object") {
      const err = new Error("OBJECT_REQUIRED: Please check the processEnv argument being passed to populate");
      err.code = "OBJECT_REQUIRED";
      throw err;
    }
    for (const key of Object.keys(parsed)) {
      if (Object.prototype.hasOwnProperty.call(processEnv, key)) {
        if (override === true) {
          processEnv[key] = parsed[key];
          populated[key] = parsed[key];
        }
        if (debug) {
          if (override === true) {
            _debug(`"${key}" is already defined and WAS overwritten`);
          } else {
            _debug(`"${key}" is already defined and was NOT overwritten`);
          }
        }
      } else {
        processEnv[key] = parsed[key];
        populated[key] = parsed[key];
      }
    }
    return populated;
  }
  var DotenvModule = {
    configDotenv,
    _configVault,
    _parseVault,
    config,
    decrypt,
    parse,
    populate
  };
  exports.configDotenv = DotenvModule.configDotenv;
  exports._configVault = DotenvModule._configVault;
  exports._parseVault = DotenvModule._parseVault;
  exports.config = DotenvModule.config;
  exports.decrypt = DotenvModule.decrypt;
  exports.parse = DotenvModule.parse;
  exports.populate = DotenvModule.populate;
  module.exports = DotenvModule;
});

// src/commands/doctor/handler.ts
var import_dotenv = __toESM(require_main(), 1);

// src/commands/doctor/steps/ApiKeyDetectedStep.ts
class ApiKeyDetectedStep {
  id = "api-key-detected";
  name = "Checking API Key...";
  async shouldRun(context) {
    return context.authMode === "apiKey";
  }
  async run(context) {
    const apiKey = context.apiKey;
    if (!apiKey || apiKey.trim().length === 0) {
      const message2 = "STITCH_API_KEY is set but empty";
      context.checks.push({
        name: "API Key",
        passed: false,
        message: message2,
        suggestion: "Set a valid API key in STITCH_API_KEY environment variable or in your .env file"
      });
      return { success: false, error: new Error(message2) };
    }
    const masked = apiKey.length > 7 ? `${apiKey.slice(0, 4)}...${apiKey.slice(-3)}` : "***";
    const message = `Detected (${masked})`;
    context.checks.push({
      name: "API Key",
      passed: true,
      message
    });
    return { success: true, detail: message };
  }
}

// src/commands/doctor/steps/GcloudCheckStep.ts
class GcloudCheckStep {
  id = "gcloud-check";
  name = "Checking Google Cloud CLI...";
  async shouldRun(context) {
    return context.authMode === "oauth";
  }
  async run(context) {
    const gcloudResult = await context.gcloudService.ensureInstalled({
      minVersion: "400.0.0",
      forceLocal: false
    });
    if (gcloudResult.success) {
      const message = `Installed (${gcloudResult.data.location}): v${gcloudResult.data.version}
   Path: ${gcloudResult.data.path}`;
      context.checks.push({
        name: "Google Cloud CLI",
        passed: true,
        message
      });
      return { success: true, detail: message };
    } else {
      const message = "Not found or invalid version";
      context.checks.push({
        name: "Google Cloud CLI",
        passed: false,
        message,
        suggestion: "Run: npx @_davideast/stitch-mcp init"
      });
      return { success: false, error: new Error(message) };
    }
  }
}

// src/commands/doctor/steps/AuthCheckStep.ts
class AuthCheckStep {
  id = "auth-check";
  name = "Checking user authentication...";
  async shouldRun(context) {
    return context.authMode === "oauth";
  }
  async run(context) {
    const authResult = await context.gcloudService.authenticate({ skipIfActive: true });
    if (authResult.success) {
      const message = `Authenticated: ${authResult.data.account}`;
      context.checks.push({
        name: "User Authentication",
        passed: true,
        message
      });
      return { success: true, detail: message };
    } else {
      const message = "Not authenticated";
      context.checks.push({
        name: "User Authentication",
        passed: false,
        message,
        suggestion: "Run: gcloud auth login"
      });
      return { success: false, error: new Error(message) };
    }
  }
}

// src/commands/doctor/steps/AdcCheckStep.ts
class AdcCheckStep {
  id = "adc-check";
  name = "Checking application credentials...";
  async shouldRun(context) {
    return context.authMode === "oauth";
  }
  async run(context) {
    const adcResult = await context.gcloudService.authenticateADC({ skipIfActive: true });
    if (adcResult.success) {
      const message = "Present";
      context.checks.push({
        name: "Application Credentials",
        passed: true,
        message
      });
      return { success: true, detail: message };
    } else {
      const message = "Not configured";
      context.checks.push({
        name: "Application Credentials",
        passed: false,
        message,
        suggestion: "Run: gcloud auth application-default login"
      });
      return { success: false, error: new Error(message) };
    }
  }
}

// src/commands/doctor/steps/AdcProjectCheckStep.ts
import fs from "node:fs";
class AdcProjectCheckStep {
  id = "adc-project-check";
  name = "Checking ADC quota project...";
  async shouldRun(context) {
    return context.authMode === "oauth";
  }
  async run(context) {
    try {
      const configPath = getGcloudConfigPath();
      const adcPath = joinPath(configPath, "application_default_credentials.json");
      let adcContent;
      try {
        adcContent = await fs.promises.readFile(adcPath, "utf-8");
      } catch {
        context.checks.push({
          name: "ADC Quota Project",
          passed: true,
          message: "Skipped (no ADC file)"
        });
        return { success: true, detail: "Skipped (no ADC file)", status: "SKIPPED" };
      }
      const adc = JSON.parse(adcContent);
      const quotaProject = adc.quota_project_id;
      if (quotaProject) {
        const message2 = `Set: ${quotaProject}`;
        context.checks.push({
          name: "ADC Quota Project",
          passed: true,
          message: message2
        });
        return { success: true, detail: message2 };
      }
      const projectId = await context.gcloudService.getProjectId();
      const suggestion = projectId ? `Run: gcloud auth application-default set-quota-project ${projectId}` : "Run: gcloud auth application-default set-quota-project YOUR_PROJECT_ID";
      const message = "Missing quota_project_id in ADC credentials";
      context.checks.push({
        name: "ADC Quota Project",
        passed: false,
        message,
        suggestion,
        details: `The file at ${adcPath} is missing the "quota_project_id" field. ` + "Google APIs require this to bill quota correctly. Without it, API calls will fail " + "with a quota project error even though authentication succeeds."
      });
      return {
        success: false,
        error: new Error(message),
        detail: message
      };
    } catch (error) {
      const message = `Failed to check ADC: ${error instanceof Error ? error.message : String(error)}`;
      context.checks.push({
        name: "ADC Quota Project",
        passed: false,
        message
      });
      return { success: false, error: new Error(message) };
    }
  }
}

// src/commands/doctor/steps/ProjectCheckStep.ts
class ProjectCheckStep {
  id = "project-check";
  name = "Checking active project...";
  async shouldRun(context) {
    return context.authMode === "oauth";
  }
  async run(context) {
    const projectId = await context.gcloudService.getProjectId();
    if (projectId) {
      const message = `Set: ${projectId}`;
      context.checks.push({
        name: "Active Project",
        passed: true,
        message
      });
      return { success: true, detail: message };
    } else {
      const message = "No project configured";
      context.checks.push({
        name: "Active Project",
        passed: false,
        message,
        suggestion: "Run: npx @_davideast/stitch-mcp init"
      });
      return { success: false, error: new Error(message) };
    }
  }
}

// src/commands/doctor/steps/ApiKeyConnectionStep.ts
class ApiKeyConnectionStep {
  id = "api-key-connection";
  name = "Testing Stitch API...";
  async shouldRun(context) {
    if (context.authMode !== "apiKey")
      return false;
    const apiKeyCheck = context.checks.find((c) => c.name === "API Key");
    return !!apiKeyCheck && apiKeyCheck.passed;
  }
  async run(context) {
    const testResult = await context.stitchService.testConnectionWithApiKey({
      apiKey: context.apiKey
    });
    if (testResult.success) {
      const message = `Healthy (${testResult.data.statusCode})`;
      context.checks.push({
        name: "Stitch API",
        passed: true,
        message
      });
      return { success: true, detail: message };
    } else {
      const message = testResult.error.message;
      context.checks.push({
        name: "Stitch API",
        passed: false,
        message,
        suggestion: testResult.error.suggestion,
        details: testResult.error.details
      });
      return { success: false, error: new Error(message) };
    }
  }
}

// src/commands/doctor/steps/ApiCheckStep.ts
class ApiCheckStep {
  id = "api-check";
  name = "Testing Stitch API...";
  async shouldRun(context) {
    if (context.authMode !== "oauth")
      return false;
    const projectCheck = context.checks.find((c) => c.name === "Active Project");
    return !!projectCheck && projectCheck.passed;
  }
  async run(context) {
    const projectId = await context.gcloudService.getProjectId();
    const accessToken = await context.gcloudService.getAccessToken();
    if (projectId && accessToken) {
      const testResult = await context.stitchService.testConnection({
        projectId,
        accessToken
      });
      if (testResult.success) {
        const message = `Healthy (${testResult.data.statusCode})`;
        context.checks.push({
          name: "Stitch API",
          passed: true,
          message
        });
        return { success: true, detail: message };
      } else {
        const message = testResult.error.message;
        context.checks.push({
          name: "Stitch API",
          passed: false,
          message,
          suggestion: testResult.error.suggestion,
          details: testResult.error.details
        });
        return { success: false, error: new Error(message) };
      }
    } else {
      const message = "Could not obtain access token";
      context.checks.push({
        name: "Stitch API",
        passed: false,
        message,
        suggestion: "Re-run authentication"
      });
      return { success: false, error: new Error(message) };
    }
  }
}

// src/commands/doctor/handler.ts
class DoctorHandler {
  gcloudService;
  stitchService;
  steps;
  ui;
  constructor(gcloudService = new GcloudHandler, stitchService = new StitchHandler, ui) {
    this.gcloudService = gcloudService;
    this.stitchService = stitchService;
    this.ui = ui || new ConsoleUI;
    this.steps = [
      new ApiKeyDetectedStep,
      new GcloudCheckStep,
      new AuthCheckStep,
      new AdcCheckStep,
      new AdcProjectCheckStep,
      new ProjectCheckStep,
      new ApiKeyConnectionStep,
      new ApiCheckStep
    ];
  }
  async execute(input) {
    import_dotenv.default.config({ quiet: true });
    const apiKey = process.env.STITCH_API_KEY;
    const context = {
      input,
      ui: this.ui,
      gcloudService: this.gcloudService,
      stitchService: this.stitchService,
      authMode: apiKey ? "apiKey" : "oauth",
      apiKey: apiKey || undefined,
      checks: []
    };
    if (!input.json)
      console.log(`
${theme.blue("Stitch Doctor")}
`);
    try {
      let spinner;
      await runSteps(this.steps, context, {
        onBeforeStep: (step) => {
          if (input.json)
            return;
          spinner = createSpinner();
          spinner.start(step.name);
        },
        onAfterStep: (_step, result2) => {
          if (!input.json) {
            if (result2.success) {
              spinner.succeed(result2.detail || "Passed");
            } else {
              spinner.fail(result2.error?.message || "Failed");
            }
          }
          return false;
        }
      });
      const allPassed = context.checks.every((c) => c.passed);
      const result = {
        success: true,
        data: { checks: context.checks, allPassed }
      };
      if (input.json) {
        console.log(JSON.stringify(result, null, 2));
        return result;
      }
      console.log(`
${theme.blue("─".repeat(60))}
`);
      console.log(theme.blue(`Health Check Summary
`));
      for (const check of context.checks) {
        const icon = check.passed ? theme.green(icons.success) : theme.red(icons.error);
        console.log(`${icon} ${check.name}: ${check.message}`);
        if (check.suggestion && !check.passed) {
          console.log(theme.gray(`  → ${check.suggestion}`));
        }
      }
      if (input.verbose) {
        const failedChecksWithDetails = context.checks.filter((c) => !c.passed && c.details);
        if (failedChecksWithDetails.length > 0) {
          console.log(`
${theme.blue("Detailed Error Information")}
`);
          for (const check of failedChecksWithDetails) {
            console.log(theme.yellow(`${check.name}:`));
            console.log(theme.gray(check.details.split(`
`).map((line) => `  ${line}`).join(`
`)));
            console.log("");
          }
        }
      }
      console.log(`
${allPassed ? theme.green("All checks passed!") : theme.yellow("Some checks failed")}
`);
      return result;
    } catch (error) {
      return {
        success: false,
        error: {
          code: "UNKNOWN_ERROR",
          message: error instanceof Error ? error.message : String(error),
          recoverable: false
        }
      };
    }
  }
}

export { DoctorHandler };

//# debugId=9E0AADA7D2F7FFCF64756E2164756E21
