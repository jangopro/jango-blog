import React, { Component } from 'react';

import myPhoto from '../images/me.jpg';
import styled from 'styled-components';

import MainContainer from '../blocks/Main';
import ListIcons from '../components/ListIcons/ListIcons';

const DivAbout = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 20px;
    p {
        grid-column: span 1;
        grid-row: span 2;
    }
    img{
        margin-bottom: 10px;
    }
`;

export default class About extends Component {
    render() {
        return (
            <MainContainer>
                <h1>About Me</h1>
                <DivAbout>
                    <div>
                        <img src={myPhoto} width='200px' />
                        <ListIcons style={{textAlign: 'center'}} />
                    </div>
                    <div>
                        <p>
                            Je suis un développeur Web de Québec, présentement en emploi chez Myca en tant que développeur front-end. J&apos;ai fait mes etudes au C&eacute;gep de Sainte-Foy en integration multimedia.
                            Je développe principaelement en JavaScript, quoiqu&apos;en début de carrière, j&apos;étais plus du côté back-end em utilisant PHP et des CMS (Wordpress, Drupal)
                        </p>
                        <p>
                            Dans mes temps libres, j’aime bien jouer de la guitare/ basse et essayer de bien parler allemand,  Je suis un grand fan de cinéma, de musique et de lecture.
                        </p>
                    </div>
                    
                </DivAbout>
                
            </MainContainer>
        );
    }
}
