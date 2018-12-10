import React, { Component } from 'react';
import styled from 'styled-components';

const AboutContainer = styled.section`
    .about {
        background-color: #272833;
        color: white;
        .grid-about {
            display: grid;
            grid-template-columns: 1fr 2fr;
            padding: 10px;
            margin: 0 auto;
            max-width: 960px;
            justify-items: center;
            .my-picture {
                border-radius: 50%;
                width: 50%;
            }

            .about-text {
                margin: auto;
            }
        }
    }
    @media screen and (max-width: 700px) {
        .about {
            .grid-about {
                grid-template-columns: 1fr;
                justify-items: center;
            }
        }
    }

    @media screen and (min-width: 1400px) {
        .about {
            .grid-about {
                grid-template-columns: 500px 500px;
                margin: 0 auto;
            }
        }
    }
`;

export default class About extends Component {
    render() {
        return (
            <AboutContainer>
                <section className='about'>
                    <div className='grid-about'>
                        <img
                            className='my-picture'
                            src={require('../images/me.jpg')}
                            alt='Myself'
                        />
                        <div className='about-text'>
                            <p>
                                Je suis un développeur Web de Québec,
                                présentement en emploi chez Myca en tant que
                                développeur front-end, auparavant à la Sépaq et
                                en début de carrière, j&apos;étais
                                principalement un développeur back-end.
                            </p>

                            <p>
                                Dans mes temps libres, j’aime bien jouer de la
                                guitare/ basse et essayer de bien parler
                                allemand. Je suis également un grand fan de
                                cinéma, de musique et de lecture.
                            </p>
                        </div>
                    </div>
                </section>
            </AboutContainer>
        );
    }
}
