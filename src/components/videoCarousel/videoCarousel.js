import React from 'react';
import { CarouselProvider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import { TiChevronLeft, TiChevronRight } from 'react-icons/ti';

import {
  Container,
  Back,
  Next,
  StyledSlider,
  StyledYoutube,
  StyledSlide,
} from './videoCarousel.css';
import { useMediaQuery } from '../../helpers/mediaTemplates';

export function YoutubeEmbed({
  link = 'https://www.youtube-nocookie.com/embed/7dNZ0kYKq58',
}) {
  return (
    <StyledYoutube>
      <iframe
        width="90%"
        height="80%"
        src={link}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="youtube video"
      />
    </StyledYoutube>
  );
}

export function VideoCarousel() {
  const isMobile = useMediaQuery('(max-width: 480px)');
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={75}
      totalSlides={3}
      infinite
    >
      <Container>
        {!isMobile && (
          <Back>
            <TiChevronLeft size="100px" />
          </Back>
        )}
        <StyledSlider>
          <StyledSlide index={0}>
            <YoutubeEmbed />
          </StyledSlide>
          <StyledSlide index={1}>
            <YoutubeEmbed />
          </StyledSlide>
          <StyledSlide index={2}>
            <YoutubeEmbed />
          </StyledSlide>
        </StyledSlider>
        {isMobile && (
          <Back>
            <TiChevronLeft size="100px" />
          </Back>
        )}
        <Next>
          <TiChevronRight size="100px" />
        </Next>
      </Container>
    </CarouselProvider>
  );
}
