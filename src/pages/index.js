import React from 'react';
import PropTypes from 'prop-types';

import PostListing from '../components/Posts/PostListing';
import ProjectListing from '../components/Projects/ProjectListing';
import HomeSection from '../blocks/HomeSections';

const gridArticles = {
    display: 'inline-grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridColumnGap: '20px',
};

const gridProjects = {
    display: 'inline-grid',
    gridTemplateColumns: '1fr 1fr',
    gridColumnGap: '40px'
};

const IndexPage = ({ data }) => (
    <div>
        <HomeSection bgColor='white'>
            <HomeSection.Title>Latest articles</HomeSection.Title>
            <div style={gridArticles}>
                {data.posts.edges.map(({ node }) => (
                    <PostListing key={node.id} post={node} />
                ))}
            </div>
        </HomeSection>
        <HomeSection bgColor='#272833'>
            <HomeSection.Title style={{color: '#fff'}}>Projects</HomeSection.Title>
            <div style={gridProjects}>
                {data.projects.edges.map(({ node }) => (
                    <ProjectListing key={node.id} project={node} />
                ))}
            </div>
        </HomeSection>
    </div>
    
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
    posts: allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { collection: { eq: "posts" } }
        limit: 3
    ) {
      edges {
        node {
          id
          timeToRead
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
    projects: allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { collection: { eq: "projects" } }
        limit: 3
    ) {
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
