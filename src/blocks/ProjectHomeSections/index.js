import Excerpt from './Excerpt';
import styled from 'styled-components';
import Link from './Link';

const ProjectHomeSection = styled.article`
    color: #fff;
    display: inline-grid;
    grid-template-columns: 1fr 2fr;
    grid-column-gap: 20px;
    align-items: center;

    @media (max-width: 700px) {
        grid-template-columns: 1fr;
        justify-items: center;
    }
`;

ProjectHomeSection.Link = Link;
ProjectHomeSection.Excerpt = Excerpt;

export default ProjectHomeSection;
