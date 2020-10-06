import styled, { css } from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

import TextureLeftSvg from 'images/miro_texture_left.svg';
import TextureRightSvg from 'images/miro_texture_right.svg';
import LeteringSvg from 'images/miro_letering.svg';

import Img from 'gatsby-image';

export const Container = styled.header`
  height: 90vh;
  position: relative;

  background: ${p => p.bg || '#6bd7cf'};

  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  overflow: hidden;

  /* ${MEDIA.PHONE`
    height: 70vh;
  `} */
`;

export const ChildrenImg = styled(Img)`
  margin-right: 30%;
  height: 90%;

  opacity: ${p => (p.show ? '1' : '0')};
  transition: opacity 0.5s;

  ${MEDIA.PHONE`
    margin-right: 0;
    width: 315px !important;
    height: 379.5px !important;
  `};
`;

export const textsStyles = css`
  height: calc(100% - 28vh);

  position: absolute;
  top: 0;

  display: flex;
  align-items: flex-end;

  font-weight: bold;

  ${MEDIA.PHONE`
    align-items: flex-start;
    height: calc(100% - 10vh);
  `}

  @media (min-width: 1801px) {
    font-size: 5rem;
  }
  @media (max-width: 1800px) and (min-width: 901px) {
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
  padding: 0 0 3% 10%;
  color: #646667;
  ${textsStyles}

  ${MEDIA.PHONE`
    padding: 45% 0 0 2%;
    width: 40%;
    ${p =>
      p.moreTop &&
      css`
        padding: 35% 0 0 2%;
      `}
  `}
`;

export const LeteringRightText = styled.div`
  width: 30%;
  right: 0;
  justify-content: flex-start;
  padding: 15% 10% 1% 4%;
  color: ${p => p.color || 'white'};
  ${textsStyles}

  ${MEDIA.PHONE`
    width: 60%;
    padding: 35% 4% 0 4%;
  `}
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
    height: 10vh;
    width: ${p => (p.right ? '20%' : '40%')};
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

export const LeteringContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const LeteringBottom = styled.div`
  height: 28vh;
  ${MEDIA.PHONE`
    height: 10vh;
  `}
`;

export const DotContainer = styled.div`
  position: absolute;

  height: 60px;
  /* background: palegreen; */

  right: 40%;

  display: flex;

  ${MEDIA.PHONE`
    display: none;
  `}
`;

export const Dot = styled.div`
  background: ${p => (p.selected ? '#fbbf51' : '#7b3050')};
  border: none;
  border-radius: 50%;
  height: 25px;
  width: 25px;
  margin: 0 12px;

  &:hover {
    cursor: pointer;
  }
`;
