import React, { useState, useEffect } from 'react';
import { Heading } from './components/Heading';
import { Loader } from './components/Loader';
import { UnsplashImage } from './components/UnsplashImage';

import axios from 'axios';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Calibri;
    background-color: #222;
    color: #fff;
  }

  p {
    margin-top: 10px;
    font-size: 1.25rem;
  }
`;

const WrapperImage = styled.section`
  max-width: 70rem;
  margin: 4rem auto;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 300px;
`;



function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, [])

  const fetchImages = () => {
    const apiRoot = 'https://api.unsplash.com';
    const accessKey = process.env.REACT_APP_ACCESSKEY;

    axios
      .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=12&query="black-lives-matter"`)
      .then(res => setImages([...images, ...res.data]))
      // .then(res => console.log(res.data))
  }

  return (
    <div className="App">
      <Heading />
      <GlobalStyle />
      <InfiniteScroll dataLength={images.length} next={fetchImages} hasMore={true} loader={<Loader />} style={{ overflowY: 'hidden'}}>
        <WrapperImage>
          {images.map(img => (
            <>
              <UnsplashImage url={img.urls.regular} key={img.id} name={img.user.username} link={img.user.links.html} desc={img.description} />
              
            </>
          ))}
        </WrapperImage>
      </InfiniteScroll>
    </div>
  );
}

export default App;
