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

const Img = styled.img`
  height: 7rem;

  ${MEDIA.PHONE`
    height: 3.8rem;
  `}
`;

export function SocialIcon({ link, img, alt }) {
  return (
    <a href={link}>
      <Img src={img} alt={alt} />
    </a>
  );
}
