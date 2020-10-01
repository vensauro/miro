import React from 'react';
import styled, { css } from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.nav`
  ul {
    display: flex;
    list-style: none;
    padding: 0;

    li {
      text-transform: uppercase;
      font-size: 1.3rem;

      & + li {
        margin-left: 2rem;
        ${MEDIA.PHONE`
          margin-left: 1rem;
        `}
      }
    }
  }
`;

const Img = styled.img`
  height: ${p => (p.size ? `${p.size}rem` : '7rem')};

  ${p =>
    p.secondary &&
    css`
      filter: brightness(130%);
    `}

  ${MEDIA.PHONE`
    height: 3.6rem;
  `}
`;

export function SocialIcon({ link, img, alt, size, secondary }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Img {...{ src: img, alt, size, secondary, loading: 'lazy' }} />
    </a>
  );
}
