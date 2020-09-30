import React from 'react';
import { Slider, Slide, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import MEDIA from 'helpers/mediaTemplates';
import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  width: 50%;

  display: flex;
  align-items: center;

  ${MEDIA.PHONE`
    width: 40%;
  `}
`;

const StyledSlider = styled(Slider)`
  align-self: center;

  width: 565px;

  ${MEDIA.PHONE`
    height: 55%;
  `}
`;
const StyledSlide = styled(Slide)`
  font-size: 6rem;
  color: #fbbf51;
  font-family: 'Titillium Web';
  font-weight: bold;

  ${MEDIA.PHONE`
    word-wrap: break-word;
    font-size: 3rem;
  `}
`;

const StyledDots = styled(DotGroup)`
  display: flex;
  position: absolute;
  bottom: 20%;

  ${MEDIA.PHONE`
    bottom: 10%;
    left: 35%;
  `}
  & .carousel__dot {
    background: #7b3050;
    border: none;
    border-radius: 50%;
    height: 25px;
    width: 25px;
    margin: 0 12px;
  }

  & .carousel__dot--selected {
    background: #fbbf51;
  }
`;

export function StartCarousel({ slides }) {
  return (
    <Container>
      <StyledSlider>
        {slides.map((e, i) => (
          <StyledSlide index={i} key={i}>
            {e.text}
          </StyledSlide>
        ))}
      </StyledSlider>
      <StyledDots />
    </Container>
  );
}
