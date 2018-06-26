import React, { Component } from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
    text-align: center;
    padding: 10px;
`;

export default class Footer extends Component {
    render() {
        return (
            <FooterContainer>
                <strong>Copyright @ 2018 </strong>
            </FooterContainer>
        );
    }
}
