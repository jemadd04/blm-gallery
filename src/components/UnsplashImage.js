import React, { useState } from 'react';
import styled from 'styled-components';

const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Credit = styled.p`
  font-size: 14px;
  color: white;
  position: absolute;
  bottom: 8px;
  left: 16px;
  text-shadow: 2px 2px #222;
  a:link {
      text-decoration: underline;
      color: white;
  }
  a:visited {
      text-decoration: underline;
      color: white;
  }
`;

const Maindiv = styled.div`
    position: relative
`;

export const UnsplashImage = ({url, key, name, link, desc}) => {
    return (
        <Maindiv>
            <Img src={url} key={key} alt={desc} />
            <Credit>Photo by <a href={link} target="_blank">{name}</a> on <a href="https://unsplash.com/" target="_blank">Unsplash</a></Credit>
        </Maindiv>
    )
}
