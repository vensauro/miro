import React from 'react';
import {
  Title,
  StyledYoutube,
  Container,
  ScreenLimiter,
  PlayIcon,
} from './videoPed.css';

export function YoutubeEmbed({
  link = 'https://www.youtube-nocookie.com/embed/7dNZ0kYKq58',
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
    <Container>
      <ScreenLimiter>
        <Title>
          JORNADA <br /> PEDAGÓGICA
        </Title>
        <YoutubeEmbed />
      </ScreenLimiter>
      <PlayIcon />
    </Container>
  );
}
