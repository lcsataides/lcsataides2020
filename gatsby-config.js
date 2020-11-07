module.exports = {
  siteMetadata: {
    title: `Lucas Ataides, Designer`,
    description: `Hi, this is Lucas Ataides and here you check my proudest cases, some of my design process and my contact info. Hope you enjoy!`,
    author: `@lcsataides`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "G-37KFCXRH6Q",
        head: false,
        anonymize: true,
        respectDNT: true,
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        pageTransitionDelay: 0,
        defer: false,
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "example.com",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
        name: `cases`,
        path: `${__dirname}/src/cases`,
        name: `pdf`,
        path: `${__dirname}/src/pdf`,
        name: `gif`,
        path: `${__dirname}/src/cases/`,
        name: `markdown`,
        path: `${__dirname}/src/cases`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `lcsataidesbeta`,
        short_name: `portfoliobeta`,
        start_url: `/`,
        background_color: `#FA6400`,
        theme_color: `#FA6400`,
        display: `minimal-ui`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins:
        [
          `gatsby-remark-unwrap-images`,
          `gatsby-remark-copy-linked-files`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 900,
              linkImagesToOriginal: true,
              markdownCaptions: false,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`
  ],
}
