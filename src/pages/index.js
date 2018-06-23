import React from 'react';
import PropTypes from 'prop-types';

import PostListing from '../components/Posts/PostListing';
import HomeSection from '../blocks/HomeSections';

const gridArticles = {
    display: 'inline-grid',
    gridTemplateColumns: '30% 30% 30%',
    gridColumnGap: '20px'
};

const gridProjects = {
    display: 'inline-grid',
    gridTemplateColumns: 'auto auto auto',
    gridColumnGap: '20px'
};

const IndexPage = ({ data }) => (
    <main>
        <HomeSection bgColor='rgba(37, 137, 189, 1)'>
            <HomeSection.Title>Latest articles</HomeSection.Title>
            <div style={gridArticles}>
                {data.posts.edges.map(({ node }) => (
                    <PostListing key={node.id} post={node} />
                ))}
            </div>
        </HomeSection>
        <HomeSection bgColor='rgba(205, 198, 174, 1)'>
            <HomeSection.Title>Projects</HomeSection.Title>
            <div style={gridProjects}>
                <div style={gridArticles}>
                    {data.projects.edges.map(({ node }) => (
                        <PostListing key={node.id} post={node} />
                    ))}
                </div>

            </div>
        </HomeSection>
        <HomeSection bgColor='rgba(254, 74, 73, 1)'>
            <HomeSection.Title>Subscribe!</HomeSection.Title>
            <form action="">
                <input type="email" name="" id=""/>
                <button type="submit">Subscribe!</button>
            </form>
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
  }
`;
