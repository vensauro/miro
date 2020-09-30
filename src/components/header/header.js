import React from 'react';
import posed from 'react-pose';
import { Container, MiroLogo } from './header.css';
import Nav from 'components/header/nav';

// Example of a component-specific page transition
const AnimatedContainer = posed.div({
  enter: {
    y: 0,
    transition: {
      ease: 'easeInOut',
    },
  },
  exit: {
    y: '-100%',
    transition: {
      ease: 'easeInOut',
    },
  },
});

const Header = ({ siteLink }) => {
  return (
    <AnimatedContainer style={{ position: 'relative' }}>
      <Container>
        <MiroLogo href={siteLink} />

        <Nav size={5} />
      </Container>
    </AnimatedContainer>
  );
};

export default Header;
