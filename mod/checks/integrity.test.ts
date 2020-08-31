// Copyright 2020-present the denosaurs team. All rights reserved. MIT license.

Deno.test(
  "integrity",
  async () => {
    (await import("../../cnames.ts")).default;
    (await import("../../restricted.ts")).default;
  },
);
