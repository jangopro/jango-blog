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
    padding: 10px;
    font-size: 12px;
`;

export default class Footer extends Component {
    render() {
        return (
            <FooterContainer>
                <FaGithub />
                <FaTwitter />
                <FaSpotify />
                <FaLinkedin />
                <strong>Copyright @ 2018 </strong>
            </FooterContainer>
        );
    }
}
