import React from 'react';
import {
  Title,
  StyledYoutube,
  Container,
  ScreenLimiter,
  PlayIcon,
} from './videoPed.css';
import IO from 'components/io';

export function YoutubeEmbed({
  link = 'https://www.youtube-nocookie.com/embed/-bZfEEl31l0',
}) {
  return (
    <StyledYoutube>
      <iframe
        width="100%"
        height="100%"
        src={link}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="youtube video"
      />
    </StyledYoutube>
  );
}

export function VideoPed() {
  return (
    <IO rootMargin="-100px">
      {({ hasBeenVisible }) => (
        <Container>
          <ScreenLimiter>
            <Title>
              JORNADA <br /> PEDAGÓGICA
            </Title>
            {hasBeenVisible && <YoutubeEmbed />}
          </ScreenLimiter>
          <PlayIcon />
        </Container>
      )}
    </IO>
  );
}
