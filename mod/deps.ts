// Copyright 2020-present the denosaurs team. All rights reserved. MIT license.

// provide better logging, see src/log.ts
export * as log from "https://deno.land/std@0.65.0/log/mod.ts";
export { LogRecord } from "https://deno.land/std@0.65.0/log/logger.ts";
export {
  LogLevels,
  LevelName as LogLevelName,
} from "https://deno.land/std@0.65.0/log/levels.ts";
export { BaseHandler } from "https://deno.land/std@0.65.0/log/handlers.ts";

// colors for a pretty cli
export {
  setColorEnabled,
  reset,
  bold,
  blue,
  green,
  yellow,
  italic,
  red,
  gray,
} from "https://deno.land/std@0.65.0/fmt/colors.ts";

export { delay } from "https://deno.land/std@0.65.0/async/delay.ts";
