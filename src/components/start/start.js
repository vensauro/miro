import React, { useEffect, useState } from 'react';
import {
  Container,
  YellowBg,
  Letering,
  TextureLeft,
  TextureRight,
  ChildrenImg,
  WhiteBg,
  LeteringRightText,
  LeteringContainer,
  LeteringBottom,
  DotContainer,
  Dot,
} from './start.css';

export function Start({ banners }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [anim, setAnim] = useState(true);

  const animationTime = 10000;

  useEffect(() => {
    const interval1 = setInterval(() => {
      setAnim(false);
    }, animationTime - 100);

    const interval2 = setInterval(() => {
      setActiveSlide(old => (old + 1) % banners.length);
    }, animationTime);

    const interval3 = setInterval(() => {
      setAnim(true);
    }, animationTime + 50);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
    };
  }, [setActiveSlide]);

  return (
    <Container bg={banners[activeSlide].background}>
      <WhiteBg>{banners[activeSlide].rightText}</WhiteBg>

      <ChildrenImg
        show={anim}
        fixed={banners[activeSlide].image.src.childImageSharp.fixed}
        alt={banners[activeSlide].image.alt}
      />

      <YellowBg>
        <TextureLeft />
      </YellowBg>

      <LeteringRightText color={banners[activeSlide]?.leftTextColor}>{banners[activeSlide].leftText}</LeteringRightText>
      <YellowBg right>
        <TextureRight />
      </YellowBg>

      <LeteringContainer>
        <Letering />
        <LeteringBottom />
      </LeteringContainer>

      <DotContainer>
        {banners.map((e, i) => (
          <Dot
            key={i}
            onClick={() => setActiveSlide(i)}
            selected={i === activeSlide}
          />
        ))}
      </DotContainer>
    </Container>
  );
}
