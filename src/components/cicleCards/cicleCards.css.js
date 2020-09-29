import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.section`
  width: 100%;
  padding: 8% 0;

  display: flex;
  justify-content: space-evenly;

  ${MEDIA.PHONE`
    flex-direction: column;
    align-items: center;
  `}
`;
