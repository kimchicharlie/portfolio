module.exports = {
  siteMetadata: {
    title: `Charlie Henin Full Stack Developer Node.js React Toulouse`,
    description: `This is the personal website of Charlie Henin, Full Stack Developer Node.js React based in Toulouse. I love building services using Javascript technologies.`,
    author: `kimchicharlie`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `assets/images/charlie-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@components': 'src/components',
          '@views': 'src/views',
          '@pages': 'src/pages',
          '@images': 'assets/images',
          '@icons': 'assets/icons',
          '@content': 'src/content',
        },
        extensions: [],
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
  ],
};
