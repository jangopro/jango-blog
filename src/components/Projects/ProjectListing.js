import React from 'react';

import PropTypes from 'prop-types';
import BlogPostHome from '../../blocks/BlogPostHome';


const PostListing = ({ project }) => (
    <BlogPostHome>
        <h3>{project.frontmatter.title}</h3>
        <BlogPostHome.Excerpt>{project.excerpt}</BlogPostHome.Excerpt>
    </BlogPostHome>
);

export default PostListing;

PostListing.propTypes = {
    project: PropTypes.object
};


