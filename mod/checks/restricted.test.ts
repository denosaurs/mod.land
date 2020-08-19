import { assert } from "./test_deps.ts";

import { CNAMEs, RestrictedNames } from "../types.ts";

Deno.test(
  "checks | restricted",
  async () => {
    const cnames = (await import("../../cnames.ts")).default as CNAMEs;
    const restricted = (await import("../../restricted.ts"))
      .default as RestrictedNames;
    for (let name of Object.keys(cnames)) {
      assert(
        !restricted.some((r: RegExp) => r.test(name)),
        `"${name}" is restricted or contains illegal characters and cannot be used`,
      );
    }
  },
);
