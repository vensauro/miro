import React from 'react';
import styled from 'styled-components';
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

const Img = styled.svg`
  height: ${p => (p.size ? `${p.size}rem` : '7rem')};

  color: ${p => p.color};

  ${MEDIA.PHONE`
    height: 3.6rem;
  `}
`;

export function SocialIcon({ link, img, alt, size }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Img {...{ as: img, alt, size, loading: 'lazy' }} />
    </a>
  );
}
