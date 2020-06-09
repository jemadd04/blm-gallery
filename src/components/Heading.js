import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
    max-width: 70rem;
    margin: 2rem auto;
    text-align: center;
`;

const H1 = styled.h1`
    font-family: 'Oswald', sans-serif;
`;

export const Heading = () => {
    return (
        <Header>
            <H1>#BlackLivesMatter</H1>
            <p>Powerful images from around the world from the Black Lives Matter movement</p>
            <p><strong>Disclaimer: Photos are randomly pulled, so some images may contain obscenities</strong></p>
        </Header>
    )
}
