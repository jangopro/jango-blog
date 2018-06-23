module.exports = {
    siteMetadata: {
        title: 'Gatsby Default Starter',
        desc: 'A new blog'
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-styled-components',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'posts',
                path: `${__dirname}/src/posts`
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'img',
                path: `${__dirname}/src/images`
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'projects',
                path: `${__dirname}/src/projects`
            }
        },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                excerpt_separator: '<!-- end -->'
            }
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        'gatsby-plugin-netlify-cms',
        'gatsby-plugin-eslint'
    ]
};
