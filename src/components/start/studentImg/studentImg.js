import React from 'react';
import StudentImgSrc from 'images/img_estudante_desktop.png';
import StudentImgSrcMobile from 'images/img_estudante_m.png';
import MEDIA from 'helpers/mediaTemplates';
import styled from 'styled-components';

export const Img = styled.img`
  height: 85%;

  margin-right: 8%;

  ${MEDIA.PHONE`
    margin-right: -25%;

    height: 80%;
  `}
`;

export const Picture = styled.picture`
  height: 100%;
  width: 50%;

  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

export function StudentImg() {
  return (
    <Picture>
      <source media="(min-width: 481px)" srcSet={StudentImgSrc} />
      <source media="(max-width: 480px)" srcSet={StudentImgSrcMobile} />

      <Img alt="Garoto com mochila e mascara acenando" />
    </Picture>
  );
}
