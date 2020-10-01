import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { MiroLogo } from '../header/header.css';
import Nav from '../header/nav/nav';
import { AboutText, Container } from './about.css';

export function About({ siteLink }) {
  const isMobile = useMediaQuery({ maxWidth: 480 });
  return (
    <Container>
      <MiroLogo href={siteLink} />
      <AboutText>
        Rua Cândido Portinari, 58, Morro do Ipiranga {isMobile ? <br /> : '- '}
        Barra - Salvador/BA - CEP: 40140-440 <br />
        (71) 3038-2400 • (71) 3247-3022 • (71) 3235-6757
        {isMobile ? <br /> : ' •'} (71) 3194-2400 • (71) 99971-3143
      </AboutText>
      <Nav />
    </Container>
  );
}
