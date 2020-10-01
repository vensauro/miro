import styled, { css } from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

import TextureLeftSvg from 'images/miro_texture_left.svg';
import TextureRightSvg from 'images/miro_texture_right.svg';
import LeteringSvg from 'images/miro_letering.svg';

export const Container = styled.header`
  height: 90vh;
  position: relative;

  background: #6bd7cf;

  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  /* ${MEDIA.PHONE`
    height: 70vh;
  `} */

`;

export const GirlImg = styled.img`
  margin-right: 25%;
  height: 90%;

  ${MEDIA.PHONE`
    margin-right: -50%;
  `}
`;

export const textsStyles = css`
  height: calc(100% - 28vh);

  position: absolute;
  top: 0;

  display: flex;
  align-items: flex-end;

  font-weight: bold;

  @media (min-width: 1801px) {
    font-size: 5rem;
  }
  @media (max-width: 1800px) and (min-width: 1201px) {
    font-size: 3.6rem;
  }
  @media (max-width: 1200px) and (min-width: 901px) {
    font-size: 3rem;
  }
  @media (max-width: 900px) {
    font-size: 2.4rem;
  }
`;

export const WhiteBg = styled.div`
  background: white;
  width: 36%;
  left: 0;
  justify-content: flex-end;
  padding: 4.5%;
  color: #646667;
  ${textsStyles}
`;

export const LeteringRightText = styled.div`
  width: 30%;
  right: 0;
  justify-content: flex-start;
  padding: 0 0 2.5% 4%;
  color: white;
  ${textsStyles}
`;

export const YellowBg = styled.div`
  background: #fdbc52;

  position: absolute;
  bottom: 0;
  ${p =>
    p.right
      ? css`
          right: 0;
        `
      : css`
          left: 0;
        `}

  height: 28vh;
  width: ${p => (p.right ? '30%' : '36%')};

  ${MEDIA.PHONE`
    color: white;
    font-weight: bold;
    font-size: 2.5rem;

    padding: 2%;
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

const textureCss = css`
  width: 100%;
`;

export const TextureLeft = styled(TextureLeftSvg)`
  ${textureCss}
`;

export const TextureRight = styled(TextureRightSvg)`
  ${textureCss}
`;

export const Letering = styled(LeteringSvg)`
  width: 100%;
  z-index: 3;
`;
