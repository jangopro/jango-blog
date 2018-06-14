import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const PostArticle = styled.article`
  width: 33%;
  float: left;
`;

const PostListing = ({ post }) => (
    <PostArticle>
        <h3>
            <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
        </h3>
        <span>{post.frontmatter.date}</span>
        <p>{post.excerpt}</p>
    </PostArticle>
);

export default PostListing;

PostListing.propTypes = {
    post: PropTypes.optionalObject
};


