import React from 'react';
import { Container } from './start.css';

import { StartCarousel } from './carousel/carousel';
import { StudentImg } from './studentImg/studentImg';
import { CarouselProvider } from 'pure-react-carousel';

export function Start({ slides }) {
  return (
    <CarouselProvider
      naturalSlideWidth={410}
      naturalSlideHeight={210}
      isPlaying
      infinite
      totalSlides={slides.length}
    >
      <Container>
        <StudentImg />
        <StartCarousel slides={slides} />
      </Container>
    </CarouselProvider>
  );
}
