import React from 'react';
import { CarouselProvider } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import {
  Container,
  StyledSlider,
  StyledYoutube,
  StyledSlide,
  PlayIcon,
} from './videoCarousel.css';
import IO from 'components/io';

export function YoutubeEmbed({
  link = 'https://www.youtube-nocookie.com/embed/VIhT8KlKAGI',
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
  return (
    <IO rootMargin="-100px">
      {({ hasBeenVisible }) => (
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={75}
          totalSlides={1}
          infinite
          style={{ position: 'relative', overflow: 'hidden' }}
        >
          <Container>
            <StyledSlider>
              <StyledSlide index={0}>
                {hasBeenVisible && <YoutubeEmbed />}
              </StyledSlide>
            </StyledSlider>
            <PlayIcon />
          </Container>
        </CarouselProvider>
      )}
    </IO>
  );
}
