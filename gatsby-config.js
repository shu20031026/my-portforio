require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "MyPortforio",
    description: "Gatsbyで作成したポートフォリオサイトです。",
    author: "Nakashima Shu",
  },
  plugins: [
    "gatsby-plugin-emotion",
    `gatsby-plugin-material-ui`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Roboto:400,500,700", "Material+Icons"],
        },
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_self",
              rel: "noopener noreferrer",
            },
          },
          {
            resolve: `gatsby-source-contentful`,
            options: {
              spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
              accessToken: process.env.GATSBY_CONTENTFUL_API_KEY,
            },
          },
        ],
      },
    },
  ],
};
