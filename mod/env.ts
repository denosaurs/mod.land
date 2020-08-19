// Copyright 2020-present the denosaurs team. All rights reserved. MIT license.

export const CF_ZID = Deno.env.get("CF_ZID")!;
export const CF_TOK = Deno.env.get("CF_TOK")!;

if (!CF_ZID || !CF_TOK) {
  throw new Error("CF_ZID & CF_TOK need to be defined in the environment");
}
