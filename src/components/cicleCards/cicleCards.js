import React from 'react';
import { CicleCard } from './cicleCard/cicleCard';
import { Container } from './cicleCards.css';
import Jet from 'images/icon01.svg';
import Phone from 'images/icon02.svg';
import Magnifier from 'images/icon03.svg';

const icons = [Jet, Phone, Magnifier];

export function CicleCards({ cicles }) {
  return (
    <Container>
      {cicles.map((e, i) => (
        <CicleCard
          key={i}
          SvgIcon={icons[i]}
          title={e.title}
          subtitle={e.subtitle}
        />
      ))}
    </Container>
  );
}
