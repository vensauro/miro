import React from 'react';
import { Link } from 'gatsby';
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

const Header = () => {
  return (
    <AnimatedContainer style={{ position: 'relative' }}>
      <Container>
        <Link to="/">
          <MiroLogo />
        </Link>

        <Nav size={5} />
      </Container>
    </AnimatedContainer>
  );
};

export default Header;
