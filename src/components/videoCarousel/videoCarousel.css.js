import { Slider, ButtonBack, ButtonNext, Slide } from 'pure-react-carousel';
import { FaRegPlayCircle } from 'react-icons/fa';
import styled, { css } from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.section`
  height: 80vh;
  background: #fbbf51;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-wrap: wrap;

  overflow: hidden;

  ${MEDIA.PHONE`
    height: 50vh;
  `}
`;

export const StyledSlider = styled(Slider)`
  width: 746px;
  height: 420px;

  z-index: 2;

  ${MEDIA.PHONE`
    width: 100vw;
    height: 60%;
  `}
`;

export const buttonStyle = css`
  border-radius: 50%;
  background: #ce5a61;
  z-index: 2;

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

  &:focus {
    outline: 0 !important;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0) !important;
  }

  ${MEDIA.PHONE`
    margin: 0 10px;
  `}
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

  z-index: 2;
`;

export const PlayIcon = styled(FaRegPlayCircle)`
  position: absolute;
  left: -25%;
  bottom: -75%;

  font-size: 125rem;
  font-weight: lighter;
  color: rgba(00, 00, 00, 0.1);

  ${MEDIA.PHONE`
    left: -165%;
    bottom: -150%;
    font-size: 100rem;
  `}
`;

export const MobileButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;
