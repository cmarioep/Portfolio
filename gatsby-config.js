module.exports = {
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