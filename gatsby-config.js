module.exports = {
  siteMetadata: {
    title: `Carlos Mario Portfolio`,
    description: `Web personal portfolio, Frontend Developer @cmarioep`,
    twitterUsername: `@cmarioep`,
    siteUrl: `https://www.cmarioep.com/`,
  },
  plugins: ["gatsby-plugin-sass", "gatsby-plugin-image", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    }]
};