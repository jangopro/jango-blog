import Excerpt from './Excerpt';
import styled from 'styled-components';
import Link from './Link';
import Subtitle from './Subtitle';


const BlogPostHome = styled.article`

`;

BlogPostHome.Link = Link;
BlogPostHome.Excerpt = Excerpt;
BlogPostHome.Subtitle = Subtitle;

export default BlogPostHome;