import React from 'react';
import { Cicle, Container, Title, SubTitle } from './cicleCard.css';

export function CicleCard({ SvgIcon, title, subtitle }) {
  return (
    <Container>
      <Cicle>
        <SvgIcon width="70%" height="70%" />
      </Cicle>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </Container>
  );
}
