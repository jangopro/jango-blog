import React from 'react';

import PropTypes from 'prop-types';
import BlogPostHome from '../blocks/BlogPostHome';

const PostListing = ({ post }) => (
    <BlogPostHome>
        <BlogPostHome.Title>
            <BlogPostHome.Link href={post.fields.slug}>
                {post.frontmatter.title}
            </BlogPostHome.Link>
        </BlogPostHome.Title>
        <BlogPostHome.Excerpt>{post.excerpt}</BlogPostHome.Excerpt>
    </BlogPostHome>
);

export default PostListing;

PostListing.propTypes = {
    post: PropTypes.object,
};
