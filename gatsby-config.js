const dir = './';

module.exports = {
  siteMetadata: {
    title: 'Planet Reverie',
    author: 'Eleanor Gunapala',
    description: 'Eleanor Gunapala\'s personal blog.',
    social: {
      instagram: 'https://instagram.com/poop'
    },
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${dir}/content/blog`,
        name: 'blog',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${dir}/content/assets`,
        name: 'assets',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          // TODO: this doesn't seem to work.
          {
            resolve: 'gatsby-remark-figure-caption',
            options: { figureClassName: 'md-figure' },
          },
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        // trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    'gatsby-plugin-feed',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Planet Reverie',
        short_name: 'Planet Reverie',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#70C6B1',
        display: 'minimal-ui',
        icon: 'content/assets/circle-icon.png',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    'gatsby-plugin-styled-components',
  ],
};
