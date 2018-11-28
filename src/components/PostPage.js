import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Layout from './Layout';

const Post = styled.article`
    text-align: center;
    margin: 0 auto;
    max-width: 900px;
    padding: 30px 0px;
    span {
        padding-bottom: 20px;
    }
`;

const PostText = styled.article`
    text-align: justify;
`;

export default class PostPage extends Component {
    render() {
        const { data } = this.props;
        return (
            <Layout>
                <Post>
                    <h2>{data.markdownRemark.frontmatter.title}</h2>
                    <PostText
                        dangerouslySetInnerHTML={{
                            __html: data.markdownRemark.html,
                        }}
                    />
                </Post>
            </Layout>
        );
    }
}

PostPage.propTypes = {
    data: PropTypes.object,
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
