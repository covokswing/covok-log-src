/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    // Used for the title template on pages other than the index site
    siteTitle: `cov.ok.swing.kr`,
    // Default title of the page
    siteTitleAlt: `코복스윙log`,
    // Can be used for e.g. JSONLD
    siteHeadline: `코복스윙log`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://covokswing.netlify.app`,
    // Used for SEO
    siteDescription: `Typography driven, feature-rich blogging theme with minimal aesthetics. Includes tags/categories support and extensive features for code blocks such as live preview, line numbers, and line highlighting.`,
    // Will be set on the <html /> tag
    siteLanguage: `ko`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/banner.jpg`,
    // Twitter Handle
    author: `@lekoarts_de`,
    // Links displayed in the header on the right side
    externalLinks: [
      {
        name: `Twitter`,
        url: `https://twitter.com/lekoarts_de`,
      },
      {
        name: `Instagram`,
        url: `https://www.instagram.com/lekoarts.de/`,
      },
    ],
    // Navigation links
    navigation: [
      {
        title: `Blog`,
        slug: `/blog`,
      },
    ],
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        showLineNumbers: false,
        postsPath: "src/posts",
        pagesPath: "src/pages",
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `facebook`,
            url: `https://www.facebook.com/covidswingkr`,
          },
        ],
      },
    },
  ]
}
