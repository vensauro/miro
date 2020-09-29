import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.header`
  height: 80vh;
  position: relative;

  background: #933b60;

  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  ${MEDIA.PHONE`
    height: 70vh;
  `}
`;
