/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `cov.ok.swing.kr`,
    description: `코복스윙log`,
    // change this to you website url
    siteUrl: `https://covokswing.netlify.com/`, 
    home: {
      title: `Swing Dance in Korea over COVID-19`,
      description: `한국 스윙댄스 씬은 여전히 코로나19에 대한 경각심을 늦추지 않고 있고, 이를 위해 다양한 노력을 기울이고 있습니다. **코복스윙** (cov.ok.swing) 블로그는 스윙씬에서 코로나19의 위협에 대응하기 위한 노력들, 여러 구성원들의 생각, 현황을 한데 모았습니다. :)`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/_data`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [{
          resolve: `gatsby-remark-prismjs`,
          options: {
            classPrefix: "language-",
            inlineCodeMarker: null,
            aliases: {},
            showLineNumbers: false,
            noInlineHighlight: false,
          },
        },
        {
          resolve: 'gatsby-remark-emojis',
        }],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it. replace with yours
        trackingId: "UA-165400402-1",
        head: true,
      }
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-NN6VH53",
  
        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,
  
        // datalayer to be set before GTM is loaded
        // should be a stringified object or object
        // Defaults to null
        defaultDataLayer: function () {
          return {
            pageType: window.pageType,
          }
        },

        // Specify optional GTM environment details.
        gtmAuth: "a9dIp3nEkAQUcHaaEHV8qg",
        gtmPreview: "env-3",
        dataLayerName: "dataLayer",        
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Swing Dance in Korea over COVID-19`,
        short_name: `covokswing`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#381696`,
        display: `standalone`,
        icon: "src/images/icon.png",
      },
    },
    `gatsby-plugin-sass`, 
    `gatsby-plugin-react-helmet`,
    // `gatsby-plugin-netlify-cms`,
    'gatsby-plugin-dark-mode',
    // siteURL is a must for sitemap generation
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
  ],
}
