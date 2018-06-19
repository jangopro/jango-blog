
import Title from './Title';
import styled from 'styled-components';

const customBgColor = props => props.bgColor || 'red';

const HomeSection = styled.section.attrs({
    
})`
    padding: 20px;
    background-color: ${customBgColor};
`;

HomeSection.Title = Title;

export default HomeSection;