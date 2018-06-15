import Excerpt from './Excerpt';
import styled from 'styled-components';
import Link from './Link';


const BlogPostHome = styled.article`
    width: 33%;
    float: left;
`;

BlogPostHome.Link = Link;
BlogPostHome.Excerpt = Excerpt;

export default BlogPostHome;