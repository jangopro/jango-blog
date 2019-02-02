module.exports = {
    siteMetadata: {
        title: 'Michael Provencher',
        desc: 'Site web / Blogue de Michael Provencher',
        siteUrl: 'https://micprovencher.com',
    },
    
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-styled-components',
        'gatsby-plugin-sitemap',
        {
            resolve: 'gatsby-plugin-google-analytics',
            options: {
                trackingId: 'UA-87071406-3',
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'posts',
                path: `${__dirname}/src/posts`,
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'img',
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'projects',
                path: `${__dirname}/src/projects`,
            },
        },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                excerpt_separator: '<!-- end -->',
            },
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        'gatsby-plugin-eslint',
    ],
};
