import React, { useState } from 'react';
import styled from 'styled-components';
import { images } from '../images';

const CarouselDiv = ({ navbar, subNavbar }) => {
  const [carouselImages] = useState(images);
  const [carouselCounter, setCarouselCounter] = useState(0);
  console.log(carouselCounter);

  return (
    <div
      className={
        navbar
          ? subNavbar
            ? 'carousel-subnav-down'
            : 'carousel-down'
          : 'carousel-up'
      }
    >
      <div id='arrow-div'>
        <ArrowDiv>
          <ArrowButton
            onClick={() => setCarouselCounter((carouselCounter += 1))}
          >
            <img src='./assets/left-arrow.png' alt='' />
          </ArrowButton>
          <ArrowButton>
            <img src='./assets/right-arrow.png' alt='' />
          </ArrowButton>
        </ArrowDiv>
      </div>
      <ImgDiv>
        <Img src='/assets/perfume-img.jpg'></Img>
      </ImgDiv>
    </div>
  );
};

export default CarouselDiv;

const ArrowDiv = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 95%;
  top: 40%;
`;

const ImgDiv = styled.div`
  text-align: center;
`;

const Img = styled.img`
  width: 100%;
  height: 80vh;
  object-fit: cover;
  // <<<<<< To make the background of an image transparent >>>>>>>
  mix-blend-mode: multiply;
`;

const ArrowButton = styled.button`
  border: none;
  box-shadow: none;
`;
