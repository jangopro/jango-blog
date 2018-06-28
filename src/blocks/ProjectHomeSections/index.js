import Excerpt from './Excerpt';
import styled from 'styled-components';
import Link from './Link';


const ProjectHomeSection = styled.article`
    color: #FFF;
    display: inline-grid;
    grid-template-columns: 1fr 2fr;
    grid-column-gap: 20px
`;

ProjectHomeSection.Link = Link;
ProjectHomeSection.Excerpt = Excerpt;

export default ProjectHomeSection;