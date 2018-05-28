import React from 'react'
import Link from 'gatsby-link'

import PostListing from '../components/Posts/PostListing'
const IndexPage = ({data}) => (
  <div>
    <h2>Posts</h2>
    <p>{data.site.siteMetadata.desc }</p>
    {data.allMarkdownRemark.edges.map(({node}) => (
      <PostListing key={node.id} post={node} />
    ))}

  </div>
)

export default IndexPage

export const query = graphql`
  query SiteMeta {
    site {
      siteMetadata {
        title
        desc
      }
    }
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM YYYY")
          }
          html
          excerpt(pruneLength: 20)
        }
      }
    }
  }
`;
