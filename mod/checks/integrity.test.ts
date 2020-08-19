Deno.test(
  "integrity",
  async () => {
    (await import("../../cnames.ts")).default;
    (await import("../../restricted.ts")).default;
  },
);
