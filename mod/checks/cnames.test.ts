import { assert, assertEquals } from "./test_deps.ts";
import { CNAMEs } from "../types.ts";

Deno.test(
  "checks | cnames",
  async () => {
    const cnames = (await import("../../cnames.ts")).default as CNAMEs;
    const keys = Object.keys(cnames);
    assertEquals(Object.keys(cnames), keys.sort(), "CNAMEs should be sorted");

    Object.entries(cnames).forEach(([name, record]) => {
      assert(
        !/^.*:\/\//.test(record.target),
        `"${name}" must omit URL protocol`,
      );
      try {
        new URL(`https://${record.target}`);
      } catch {
        assert(false, `"${name}" must be a valid URL / host`);
      }
    });
  },
);
