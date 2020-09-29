import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  width: 100%;
  height: 270px;

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
  height: 50%;
  width: 55%;

  background: #fbbf51;

  font-weight: bold;
  font-size: 5rem;
  color: #933b60;

  border: none;
  border-bottom: 7px solid #933b60;
  border-radius: 0px 0px 11px 11px;

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

    font-size: 3rem;

    padding: 2%;
  `}
`;
