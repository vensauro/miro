import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  width: 100%;
  height: 256px;

  display: flex;
  justify-content: flex-end;

  ${MEDIA.PHONE`
    height: 200px;
  `}
`;

export const ButtonContainer = styled.div`
  height: 100%;
  width: 75%;

  background: #ce5a61;

  display: flex;
  justify-content: center;
  align-items: center;

  ${MEDIA.PHONE`
    width: 100%;
  `}
`;

export const SchedulerButton = styled.a`
  height: 45%;
  width: 55%;

  background: #fbbf51;

  font-family: 'Titillium Web';
  font-weight: bold;
  font-size: 4.8rem;
  color: #933b60;

  border: none;
  border-bottom: 7px solid #933b60;
  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  &:active {
    border-bottom: none;
    border-radius: none;
  }

  ${MEDIA.PHONE`
    width: 90%;
    height: 30%;

    font-size: 2.6rem;

    padding: 2%;
  `}
`;
