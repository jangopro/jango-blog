import React from 'react';
import PropTypes from 'prop-types';

import PostListing from '../components/Posts/PostListing';

const IndexPage = ({ data }) => (
    <div>
        <h2>Latest articles</h2>
        {data.allMarkdownRemark.edges.map(({ node }) => (
            <PostListing key={node.id} post={node} />
        ))}
    </div>
);

export default IndexPage;

IndexPage.propTypes = {
    data: PropTypes.optionalObject
};

export const query = graphql`
  query SiteMeta {
    site {
      siteMetadata {
        title
        desc
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD YYYY")
          }
          fields {
            slug
          }
          html
          excerpt
        }
      }
    }
  }
`;
