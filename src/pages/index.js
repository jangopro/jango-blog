import React from 'react';
import PropTypes from 'prop-types';

import PostListing from '../components/Posts/PostListing';
import HomeSection from '../blocks/HomeSections';

const gridArticles = {
    display: 'inline-grid',
    'grid-template-columns': 'auto auto auto',
    'grid-column-gap': '20px'
};

const IndexPage = ({ data }) => (
    <main>
        <HomeSection>
            <HomeSection.Title>Latest articles</HomeSection.Title>
            <div style={gridArticles}>
                {data.allMarkdownRemark.edges.map(({ node }) => (
                    <PostListing key={node.id} post={node} />
                ))}
            </div>
        </HomeSection>
        <HomeSection>
            <HomeSection.Title>Projects</HomeSection.Title>
            <div style={gridArticles}>
                {data.allMarkdownRemark.edges.map(({ node }) => (
                    <PostListing key={node.id} post={node} />
                ))}
            </div>
        </HomeSection>
    </main>

    
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
