import React, { Component } from 'react';
import styled from 'styled-components';

import {
    FaGithub,
    FaTwitter,
    FaSpotify,
    FaLinkedin
} from 'react-icons/lib/fa';

const FooterContainer = styled.footer`
    text-align: center;
    padding: 10px 0px;
    font-size: 12px;
`;

const DivIcons = styled.div`
    font-size: 20px;
    margin: 10px 0px;
    svg{
        margin-right: 10px;
    }
`;

export default class Footer extends Component {
    render() {
        return (
            <FooterContainer>
                <DivIcons>
                    <FaGithub />
                    <FaTwitter />
                    <FaSpotify />
                    <FaLinkedin />
                </DivIcons>
                <strong>©2018 Michael Provencher</strong>
            </FooterContainer>
        );
    }
}
