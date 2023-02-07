import { CNAMEs } from "./mod/mod.ts";

// ** Active subdomains **
//
// WHAT?:
// This file contains all the subdomains for the mod.land project,
// if you want to request a mod.land subdomain you should modify
// this file and submit a pull request. ;)
//
// FORMAT:
// This Typescript module exports a CNAMEs object that is synced
// with mod.land. CNAMEs contains a alphabetically sorted map of
// all the mod.land subdomain with their relative target and
// configuration.
//
// eg: adding a foo.mod.land domain that points to the project
// https://foo.github.io/bar.
//
// "foo": {
//   target: "foo.github.io/bar",
//   proxied: true, // not required
// }
//
// OPTIONS:
// * target: target of the CNAME record, required
// * proxied: whether to use Cloudflare proxy, true by default
//
// RULES:
// Before making a request you should:
// * this file passes `deno fmt` && `deno lint`
// * entries are sorted alphabetically
// * follow the request steps  (https://mod.land)
// * read our code of conduct (https://mod.land/coc)
// * read our submission rules (https://mod.land/issues)
// * read our terms of service (https://mod.land/tos)
//
// enjoy your mod.land URL <3
// ~ @denosaurs

export default <CNAMEs> {
  "@": {
    target: "denosaurs.github.io/mod.land",
  },
  "adons": {
    target: "adons.vercel.app",
  },
  "afterburner": {
    target: "projectafterburner.github.io/website",
    proxied: true,
  },
  "atordvairn": {
    target: "atordvairn.netlify.app",
  },
  "autopilot": {
    target: "littledivy.github.io/autopilot-deno",
  },
  "cr": {
    target: "rahalkar.dev",
  },
  "crewdevio": {
    target: "crewdevio.vercel.app",
  },
  "denodoc": {
    target: "denodoc.deno.dev",
    proxied: false,
  },
  "denopack": {
    target: "denofn.github.io/denopack",
  },
  "dext": {
    target: "dext.fly.dev",
  },
  "discordbot": {
    target: "skillz4killz.github.io/gamer-landing",
  },
  "discorddn": {
    target: "discorddn.github.io/docs",
  },
  "discordeno": {
    target: "discordeno.github.io/guide",
  },
  "dyno": {
    target: "dynoland.netlify.app",
  },
  "felascione": {
    target: "felascione.pages.dev"
  },
  "gabry": {
    target: "gabry-site-production.up.railway.app",
  },
  "gamer": {
    target: "skillz4killz.github.io/gamer-deno",
  },
  "ghaerdi": {
    target: "ghaerdi.netlify.app",
  },
  "god": {
    target: "docs.godwhite.tk",
  },
  "godwhite": {
    target: "docs.godwhite.tk",
  },
  "harmony": {
    target: "harmonyland.github.io",
  },
  "harmony-korean": {
    target: "akiacode.github.io/harmony.korean",
  },
  "hex": {
    target: "eserozvataf.github.io/hex",
  },
  "imlshorid": {
    target: "imlshorid.github.io",
  },
  "janda": {
    target: "janda.up.railway.app",
    proxied: false,
  },
  "keyv": {
    target: "tejasag.github.io/deno-keyv",
  },
  "lilac": {
    target: "lilac-nine.vercel.app",
  },
  "natico": {
    target: "naticoo.github.io",
  },
  "python": {
    target: "python-mod-land.deno.dev",
  },
  "range": {
    target: "leonskidev.github.io/range",
  },
  "rgrullon": {
    target: "rgrullon.netlify.app",
  },
  "shyngys": {
    target: "salemalem.github.io/twd-portfolio",
  },
  "slashdeno": {
    target: "hosting.gitbook.io",
    proxied: false,
  },
  "sneachta": {
    target: "sneachta.vercel.app",
    proxied: false,
  },
  "suzumi": {
    target: "eae8cbdf-2582-400d-8f63-beef5acd45bb.id.repl.co",
    proxied: false,
  },
  "the-all-javascript-blog": {
    target: "the-all-javascript-blog.vercel.app",
  },
  "thebigbot": {
    target: "thebigbot0000.github.io",
  },
  "usbo": {
    target: "usbokirishima.github.io/profile",
  },
  "whistle": {
    target: "whistle.deno.dev",
    proxied: false,
  },
  "x": {
    target: "xdev.deno.dev",
  },
  "zeusgang": {
    target: "zeusgangws.github.io",
  },
};
