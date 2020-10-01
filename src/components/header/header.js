import React from 'react';
import posed from 'react-pose';
import { Container, MiroLogo } from './header.css';
import Nav from 'components/header/nav';
import { useMediaQuery } from 'helpers/mediaTemplates';

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
  const isMobile = useMediaQuery('(max-width: 480px)');
  return (
    <AnimatedContainer style={{ position: 'relative' }}>
      <Container>
        {isMobile && <MiroLogo secondary href={siteLink} />}

        <Nav size={5} secondary />
      </Container>
    </AnimatedContainer>
  );
};

export default Header;
