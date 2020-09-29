import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.section`
  height: 55vh;
  width: 100%;

  background: #933b60;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  flex-direction: column;
`;

export const AboutText = styled.p`
  font-family: 'Titillium Web';
  font-size: 2rem;
  color: white;
  text-align: center;
  line-height: 1.7;

  ${MEDIA.PHONE`
    font-size: 1.8rem;
  `}
`;
