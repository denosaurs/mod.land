const toc = require("remark-toc");
const github = require("remark-github");
const emoji = require("remark-emoji");

const titles = require("./plugins/titles");

const slug = require("rehype-slug");
const prism = require("mdx-prism");
const link = require('rehype-autolink-headings')

const withMDX = require("next-mdx-enhanced")({
  layoutPath: "layouts",
  defaultLayout: true,
  fileExtensions: ["mdx"],
  remarkPlugins: [toc, github, emoji, titles],
  rehypePlugins: [slug, prism, link],
});

module.exports = withMDX({
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ["@svgr/webpack"],
    });
    return config;
  },
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
});
