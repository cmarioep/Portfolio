module.exports = {
  siteMetadata: {
    title: `Carlos Mario Portfolio`,
    description: `Web personal portfolio, Frontend Developer @cmarioep`,
    twitterUsername: `@cmarioep`,
    image: `src/images/icon.png`,
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
        "path": "./src/images/",
        quality: 90,
        webpQuality: 90
      },
      __key: "images"
    }]
};