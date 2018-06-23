const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode =({ node, getNode, boundActionCreators }) => {
    if (node.internal.type === 'MarkdownRemark') {
        const { createNodeField } = boundActionCreators;
        const slug = createFilePath({
            node,
            getNode,
            basePath: getNode(node.parent).sourceInstanceName
        });
        node.collection = getNode(node.parent).sourceInstanceName;
        createNodeField({
            node,
            name: 'slug',
            value: slug
        });
    }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
    const { createPage } = boundActionCreators;
    return new Promise((resolve) => {
        graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
            result.data.allMarkdownRemark.edges.forEach(({ node }) => {
                createPage({
                    path: node.fields.slug,
                    component: path.resolve('./src/posts/PostPage.js'),
                    context: {
                        slug: node.fields.slug
                    }
                });
            });
            resolve();
        });
    });
};
