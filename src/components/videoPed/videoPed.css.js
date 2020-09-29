import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.section`
  background: #fbbf51;
  height: 70vh;

  display: flex;
  justify-content: space-between;

  ${MEDIA.PHONE`
    flex-direction: column;
    align-items: center;
  `}
`;

export const Title = styled.h3`
  color: #963155;
  font-family: 'Titillium Web';
  font-size: 7rem;
  font-weight: bold;

  margin-top: 7%;
  margin-left: 10%;

  ${MEDIA.PHONE`
    font-size: 6rem;

    margin-top: 12%;
    margin-left: 0;
  `}
`;

export const StyledYoutube = styled.div`
  width: 680px;
  height: 440px;

  margin-top: 9%;
  margin-right: 18%;

  ${MEDIA.PHONE`
    margin-top: 0;
    margin-right: 0;
    margin-bottom: 15%;

    width: 90%;
    height: 180px;
  `}
`;
