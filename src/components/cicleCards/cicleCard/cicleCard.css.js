import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;

  color: #933b60;
  text-align: center;
`;

export const Cicle = styled.div`
  border-radius: 50%;
  width: 240px;
  height: 240px;
  background: #933b60;

  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    width: 70%;
    height: 70%;
  }
  ${MEDIA.PHONE`
    width: 180px;
    height: 180px;
    & svg {
      width:60%;
      height:60%;
    }
  `}
`;

export const Title = styled.h4`
  font-size: 3.8rem;
  font-weight: bold;

  width: 65%;

  margin-top: 10%;
  margin-bottom: 5%;

  ${MEDIA.PHONE`
    font-size: 2.5rem;
  `}
`;

export const SubTitle = styled.h6`
  font-size: 2.7rem;
  font-weight: normal;

  width: 65%;

  margin-bottom: 5%;

  ${MEDIA.PHONE`
    margin-bottom: 10%;
    font-size: 2.1rem;
  `}
`;
