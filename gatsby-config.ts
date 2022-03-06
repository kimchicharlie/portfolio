module.exports = {
  siteMetadata: {
    title: `Charlie Henin Full Stack Developer Node.js React Toulouse`,
    description: `This is the personal website of Charlie Henin, Full Stack Developer Node.js React based in Toulouse. I love building services using Javascript technologies.`,
    author: `kimchicharlie`,
    siteUrl: `https://www.charliehenin.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/images/charlie-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@components': 'src/components',
          '@views': 'src/views',
          '@pages': 'src/pages',
          '@images': 'static/images',
          '@icons': 'static/icons',
          '@files': 'static/files',
          '@content': 'src/content',
        },
        extensions: [],
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /static/,
        },
      },
    },
  ],
};
