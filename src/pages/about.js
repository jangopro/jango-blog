import React, { Component } from 'react';

import myPhoto from '../images/me.jpg';
import styled from 'styled-components';

import {
    FaGithub,
    FaTwitter,
    FaSpotify,
    FaLinkedin
} from 'react-icons/lib/fa';

const AboutSection = styled.section`
    img {
        float: left
    }
    p {
        width: 50%;
        float: left;
    }
`;

export default class About extends Component {
    render() {
        return (
            <AboutSection>
                <h1>About Me</h1>
                <img src={myPhoto} width='200px' />
                <FaGithub />
                <FaTwitter />
                <FaSpotify />
                <FaLinkedin />
                <p>
          Beard roof party cardigan locavore you probably haven&apos;t heard of them
          squid artisan edison bulb whatever normcore jianbing succulents.
          Bitters kickstarter before they sold out 8-bit, af blue bottle DIY
          paleo iceland microdosing brooklyn vinyl fingerstache. Gentrify
          adaptogen raw denim heirloom. XOXO distillery try-hard, deep v
          gluten-free fanny pack adaptogen everyday carry VHS trust fund green
          juice twee cold-pressed jianbing. Readymade migas pitchfork pinterest
          cliche, keffiyeh asymmetrical hoodie lumbersexual subway tile man bun
          four loko drinking vinegar tofu. YOLO pinterest try-hard pok pok echo
          park tacos.
                </p>
            </AboutSection>
        );
    }
}
