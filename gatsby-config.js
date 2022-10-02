const path = require("path");
const pathPrefix = "/";
const siteMetadata = {
  title: "Guide to Software Engineering",
  shortName: "Code",
  description:
    "Software Engineering Notes, Second Brain",
  twitterName: "pulsarforge",
  imageUrl: "/logo.png",
  siteUrl: "https://hqnotes.pulsarforge.io",
};
module.exports = {
  siteMetadata,
  pathPrefix,
  flags: {
    DEV_SSR: true,
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "md",
        path: `./md`,
      },
    },
    {
      resolve: "gatsby-theme-primer-wiki",
      // Change me
      options: {
        icon: "./static/logo.png",
        sidebarComponents: ["summary", "tag"],
        nav: [
          {
            title: "Github",
            url: "https://github.com/pulsarforge",
          },
          {
            title: "Twitter",
            url: "https://twitter.com/pulsarforge",
          },
        ],
        editUrl:
          "https://github.com/pulsarforge/hqnotes/",
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: siteMetadata.title,
        short_name: siteMetadata.shortName,
        start_url: pathPrefix,
        background_color: `#f7f0eb`,
        display: `standalone`,
        icon: path.resolve(__dirname, "./static/logo.png"),
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: siteMetadata.siteUrl,
        sitemap: `${siteMetadata.siteUrl}/sitemap/sitemap-index.xml`,
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-plausible`,
      options: {
        domain: 'hqnotes.pulsarforge.io',
      },
    },
  ],
};