import React, { Component } from 'react';
import styled from 'styled-components';

import {
    FaGithub,
    FaTwitter,
    FaSpotify,
    FaLinkedin
} from 'react-icons/lib/fa';


const DivIcons = styled.div`
    font-size: 20px;
    margin: 10px 0px;
    text-align: center;
    svg{
        margin-right: 10px;
        color: #000;
    }
`;

export default class ListIcons extends Component {
    render() {
        return (
            <DivIcons>
                <a href="https://github.com/jangopro" rel="noopener noreferrer" target="_blank">
                    <FaGithub />
                </a>
                <a href="https://twitter.com/mick_ohyeah" rel="noopener noreferrer" target="_blank">
                    <FaTwitter />
                </a>
                <a href="" rel="noopener noreferrer" target="_blank">
                    <FaSpotify />
                </a>
                <a href="https://www.linkedin.com/in/michael-provencher-4ba412a4/" rel="noopener noreferrer" target="_blank">
                    <FaLinkedin />
                </a>
            </DivIcons>
        );
    }
}
