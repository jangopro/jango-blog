import styled from 'styled-components';

const Link = styled.a`
    text-decoration: none;
    color: #000;
    &:hover {
        text-decoration: underline;
    }
    &:visited {
        color: #fff;
    }
`;

export default Link;
