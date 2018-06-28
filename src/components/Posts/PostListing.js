import React from 'react';
import myPhoto from '../../images/placeholder.jpg';

import PropTypes from 'prop-types';
import BlogPostHome from '../../blocks/BlogPostHome';


const PostListing = ({ post }) => (
    <BlogPostHome>
        <img src={myPhoto} alt=""/>
        <BlogPostHome.Title>
            <BlogPostHome.Link href={post.fields.slug}>
                {post.frontmatter.title}
            </BlogPostHome.Link>
        </BlogPostHome.Title>
        <BlogPostHome.Subtitle>{post.frontmatter.date} | {post.timeToRead} min read</BlogPostHome.Subtitle>
        <BlogPostHome.Excerpt>{post.excerpt}</BlogPostHome.Excerpt>
    </BlogPostHome>
);

export default PostListing;

PostListing.propTypes = {
    post: PropTypes.object
};


