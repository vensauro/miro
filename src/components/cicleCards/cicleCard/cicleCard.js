import React from 'react';
import { Cicle, Container, Title, SubTitle } from './cicleCard.css';

export function CicleCard({ SvgIcon, title, subtitle }) {
  return (
    <Container>
      <Cicle>
        <SvgIcon />
      </Cicle>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </Container>
  );
}
