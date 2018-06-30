import React, { Component } from 'react';
import styled from 'styled-components';
import ListIcons from '../ListIcons/ListIcons';

const FooterContainer = styled.footer`
    text-align: center;
    padding: 10px 0px;
    font-size: 12px;
`;

export default class Footer extends Component {
    render() {
        return (
            <FooterContainer>
                <ListIcons></ListIcons>
                <strong>©2018 Michael Provencher</strong>
            </FooterContainer>
        );
    }
}
