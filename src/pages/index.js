import React from 'react';
import PropTypes from 'prop-types';

import PostListing from '../components/Posts/PostListing';
import HomeSection from '../blocks/HomeSections';

const gridArticles = {
    display: 'inline-grid',
    gridTemplateColumns: 'auto auto auto',
    gridColumnGap: '20px'
};

const gridProjects = {
    display: 'inline-grid',
    gridTemplateColumns: 'auto auto auto',
    gridColumnGap: '20px'
};

const IndexPage = ({ data }) => (
    <main>
        <HomeSection bgColor='white'>
            <HomeSection.Title>Latest articles</HomeSection.Title>
            <div style={gridArticles}>
                {data.allMarkdownRemark.edges.map(({ node }) => (
                    <PostListing key={node.id} post={node} />
                ))}
            </div>
        </HomeSection>
        <HomeSection bgColor='yellow'>
            <HomeSection.Title>Projects</HomeSection.Title>
            <div style={gridProjects}>
                {data.allMarkdownRemark.edges.map(({ node }) => (
                    <PostListing key={node.id} post={node} />
                ))}
            </div>
        </HomeSection>
    </main>

    
);

export default IndexPage;

IndexPage.propTypes = {
    data: PropTypes.object
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
