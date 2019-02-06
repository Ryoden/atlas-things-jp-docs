module.exports = {
  siteMetadata: {
    title: 'ATLAS-Things',
    description: [
      'ATLAS-Things は RFID や QR に代表される自動認識技術を活用し、モノの入出荷を記録するためのクラウドサービスです。',
      '従来の入出荷管理サービスのような数量管理ではなく、自動認識技術により『個品管理』を実現します。',
      'マルチテナント方式で提供されるため、安価かつ迅速に提供することが可能です。',
      'モノの入出荷を確実に把握することにより、無駄な在庫を無くしたり、在庫の紛失を予防したりすることが期待できます。'
    ].join("\n"),
    author: 'Ryoden Corporation',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'ATLAS-Things',
        short_name: 'ATLAS-Things',
        start_url: '/',
        background_color: '#1eb9ee',
        theme_color: '#1eb9ee',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    `gatsby-plugin-styled-components`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-133011226-1',
      },
    },
  ],
}
