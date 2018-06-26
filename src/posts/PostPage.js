import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Post = styled.article`
    text-align: center;
    margin: 0 auto;
    width: 900px;
    padding: 30px 0px;
`;

const PostText = styled.article`
    text-align: justify;
`;

export default class PostPage extends Component {
    render() {
        const { data } = this.props;
        return (
            <Post>
                <h1>{data.markdownRemark.frontmatter.title}</h1>
                <span>{data.markdownRemark.frontmatter.date} | {data.markdownRemark.timeToRead} min read</span>
                <PostText
                    dangerouslySetInnerHTML={{
                        __html: data.markdownRemark.html
                    }}
                />
            </Post>
        );
    }
}

PostPage.propTypes = {
    data: PropTypes.object
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM DD YYYY")
      }
    }
  }
`;
