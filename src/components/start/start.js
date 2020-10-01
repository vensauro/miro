import React from 'react';
import {
  Container,
  YellowBg,
  Letering,
  TextureLeft,
  TextureRight,
  GirlImg,
  WhiteBg,
  LeteringRightText,
} from './start.css';

import GirlImgScr from 'images/img_estudante_2.png';
import { useMediaQuery } from 'react-responsive';

export function Start() {
  const isMobile = useMediaQuery({ maxWidth: 480 });
  const isDesktop = !isMobile;

  return (
    <Container>
      <WhiteBg>
        O Miró não é uma <br />
        escola comum.
      </WhiteBg>
      {isDesktop && (
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
          }}
        >
          <Letering />
          <div style={{ height: '28vh' }} />
        </div>
      )}
      <YellowBg>
        {isDesktop ? (
          <TextureLeft />
        ) : (
          <>
            Porque os <br /> comuns não <br /> mudam o <br /> mundo.
          </>
        )}
      </YellowBg>
      <GirlImg
        src={GirlImgScr}
        alt="garota com mascara fazendo simbolo da lady gaga"
      />
      {isDesktop && (
        <>
          <LeteringRightText>
            Porque os <br /> comuns não <br /> mudam o <br /> mundo.
          </LeteringRightText>
          <YellowBg right>
            <TextureRight />
          </YellowBg>
        </>
      )}
    </Container>
  );
}
