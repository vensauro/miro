import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.section`
  background: #fbbf51;
  height: 100%;
`;

export const ScreenLimiter = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: 90px 0;

  display: flex;
  justify-content: space-between;

  ${MEDIA.PHONE`
    width: 100%;
    flex-direction: column;
    align-items: center;
  `}
`;

export const Title = styled.h3`
  color: #963155;
  font-family: 'Titillium Web';
  font-size: 7rem;
  font-weight: bold;

  ${MEDIA.PHONE`
    font-size: 6rem;

    margin-top: 12%;
    margin-bottom: 15%;
  `}
`;

export const StyledYoutube = styled.div`
  width: 680px;
  height: 360px;

  ${MEDIA.PHONE`
    width: 90%;
    height: 180px;
  `}
`;
