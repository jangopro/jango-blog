import React from 'react';

import PropTypes from 'prop-types';
import BlogPostHome from '../../blocks/BlogPostHome';


const PostListing = ({ post }) => (
    <BlogPostHome>
        <h3>
            <BlogPostHome.Link href={post.fields.slug}>{post.frontmatter.title}</BlogPostHome.Link>
        </h3>
        <span>{post.frontmatter.date}</span>
        <BlogPostHome.Excerpt>{post.excerpt}</BlogPostHome.Excerpt>
    </BlogPostHome>
);

export default PostListing;

PostListing.propTypes = {
    post: PropTypes.optionalObject
};


