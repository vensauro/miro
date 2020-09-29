import React from 'react';
import StudentImgSrc from 'images/img_estudante_desktop.png';
import StudentImgSrcMobile from 'images/img_estudante_mobile.png';
import MEDIA from 'helpers/mediaTemplates';
import styled from 'styled-components';

export const Img = styled.img`
  height: 85%;

  margin-left: -8%;
  margin-right: 8%;

  ${MEDIA.PHONE`
    margin-left: -12%;
    margin-right: 0;
  `}
`;

export const Picture = styled.picture`
  height: 100%;

  display: flex;
  align-items: flex-end;

  ${MEDIA.PHONE`
    height: 100%;
    margin-right: -7%;
    width: 48%;
  `}
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
