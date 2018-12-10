import React from 'react';
import styled from 'styled-components';

const Div404 = styled.div`
    text-align: center;
    padding: 100px;
`;

const NotFoundPage = () => (
    <Div404>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Div404>
);

export default NotFoundPage;
