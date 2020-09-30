import styled from 'styled-components';
import { FaRegPlayCircle } from 'react-icons/fa';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.section`
  background: #fbbf51;
  height: 100%;

  position: relative;
  overflow: hidden;
`;

export const ScreenLimiter = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: 90px 0;

  display: flex;
  justify-content: space-between;

  z-index: 2;

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

  z-index: 2;

  ${MEDIA.PHONE`
    font-size: 6rem;

    margin-top: 12%;
    margin-bottom: 15%;
  `}
`;

export const StyledYoutube = styled.div`
  width: 680px;
  height: 360px;

  z-index: 2;

  ${MEDIA.PHONE`
    width: 90%;
    height: 180px;
  `}
`;

export const PlayIcon = styled(FaRegPlayCircle)`
  position: absolute;
  right: -1%;
  bottom: -80%;

  font-size: 105rem;
  font-weight: lighter;
  color: rgba(00, 00, 00, 0.1);

  ${MEDIA.PHONE`
    right: unset;
    left: -230%;
    bottom: -60%;
    font-size: 120rem;
  `}
`;
