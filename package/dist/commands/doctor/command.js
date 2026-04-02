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

// src/commands/doctor/spec.ts
var DoctorOptionsSchema = exports_external.object({
  verbose: exports_external.boolean().default(false),
  json: exports_external.boolean().default(false)
});
var DoctorInputSchema = exports_external.object({
  verbose: exports_external.boolean().default(false),
  json: exports_external.boolean().default(false)
});
var DoctorErrorCode = exports_external.enum([
  "CHECKS_FAILED",
  "UNKNOWN_ERROR"
]);
var HealthCheckSchema = exports_external.object({
  name: exports_external.string(),
  passed: exports_external.boolean(),
  message: exports_external.string(),
  suggestion: exports_external.string().optional(),
  details: exports_external.string().optional()
});
var DoctorSuccess = exports_external.object({
  success: exports_external.literal(true),
  data: exports_external.object({
    checks: exports_external.array(HealthCheckSchema),
    allPassed: exports_external.boolean()
  })
});
var DoctorFailure = exports_external.object({
  success: exports_external.literal(false),
  error: exports_external.object({
    code: DoctorErrorCode,
    message: exports_external.string(),
    recoverable: exports_external.boolean()
  })
});

// src/commands/doctor/command.ts
var command = {
  name: "doctor",
  description: "Verify configuration health",
  options: [
    { flags: "--verbose", description: "Show detailed error information", defaultValue: false },
    { flags: "--json", description: "Output results as JSON", defaultValue: false }
  ],
  action: async (_args, options) => {
    try {
      const parsedOptions = DoctorOptionsSchema.parse(options);
      const { DoctorHandler } = await import("../../chunk-9nzbvp6r.js");
      const handler = new DoctorHandler;
      const result = await handler.execute({
        verbose: parsedOptions.verbose,
        json: parsedOptions.json
      });
      if (!result.success) {
        console.error(theme.red(`
${icons.error} Health check failed: ${result.error.message}`));
        process.exit(1);
      }
      if (!result.data.allPassed) {
        process.exit(1);
      }
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

//# debugId=12FB4DE62F9B023964756E2164756E21
