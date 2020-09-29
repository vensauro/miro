import { Slider, ButtonBack, ButtonNext, Slide } from 'pure-react-carousel';
import styled, { css } from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.section`
  height: 80vh;
  background: #fbbf51;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-wrap: wrap;

  ${MEDIA.PHONE`
    height: 60vh;
  `}
`;

export const StyledSlider = styled(Slider)`
  width: 746px;
  height: 420px;

  ${MEDIA.PHONE`
    width: 100vw;
    height: 60%;
  `}
`;

export const buttonStyle = css`
  border-radius: 50%;
  background: #ce5a61;

  width: 60px;
  height: 60px;

  border: none;

  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px;

  font-weight: bold;
  font-size: 3rem;
  color: #fbbf51;
`;

export const Back = styled(ButtonBack)`
  ${buttonStyle}
`;

export const Next = styled(ButtonNext)`
  ${buttonStyle}
`;

export const StyledYoutube = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 746px;
  height: 420px;

  ${MEDIA.PHONE`
    width: 100vw;
    height: 35vh;
  `}
`;

export const StyledSlide = styled(Slide)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
