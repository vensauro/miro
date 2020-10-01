import React from 'react';
import styled, { css } from 'styled-components';
import MiroSvg from 'images/marca_default.svg';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 3rem;

  position: absolute;
  top: 0;
  z-index: 3;

  width: 96%;

  ${MEDIA.PHONE`
    padding: 0.3rem;
    padding-top: 2rem;
  `}
`;

const StyledMiro = styled(MiroSvg)`
  height: 6rem;
  width: 460px;

  ${MEDIA.PHONE`
    height: 3.6rem;
    width: 170px;

    ${p =>
      p.secondary &&
      css`
        height: 3rem;
        width: 200px;
      `}
  `}
`;

export function MiroLogo({ href = '#', secondary }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <StyledMiro secondary={secondary} />
    </a>
  );
}
