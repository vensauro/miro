import React from 'react';
import styled from 'styled-components';
import MiroSvg from 'images/marca_default.svg';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;

  position: absolute;
  top: 0;
  z-index: 3;

  width: 100%;

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
  `}
`;

const StyledMiroNav = styled(MiroSvg)`
  & .b {
    color: #aa3861;
    fill: #aa3861;
  }
  width: 300px;
  ${MEDIA.PHONE`
    width: 130px;
  `}
`;

export function MiroLogo({ href = '#' }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <StyledMiro />
    </a>
  );
}

export function NavMiroLogo({ href = '#' }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <StyledMiroNav />
    </a>
  );
}
