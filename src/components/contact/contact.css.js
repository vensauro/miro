import styled, { css } from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.section`
  display: flex;
  height: 100%;
  width: 100%;

  ${MEDIA.PHONE`
    flex-direction: column;
  `}
`;

export const DescriptionContainer = styled.div`
  width: 50%;
  /* height: 100%; */
  ${MEDIA.PHONE`
    width: 100%;
  `}

  color: #963155;
`;

export const DescriptionImageContainer = styled.div`
  /* height: 100%; */
  width: 70%;
  margin-top: 10%;

  position: relative;

  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  flex-direction: column;

  ${MEDIA.PHONE`
    width: 100%;
    text-align: center;
    align-items: center;
  `}
`;

export const DescriptionImage = styled.img`
  /* height: 100%; */
  width: 100%;

  position: absolute;
  top: 0;
  z-index: -1;

  ${MEDIA.PHONE`
    align-self: flex-start;
    font-size: 4rem;
    width: 70%;
  `}
`;

export const DescriptionTitle = styled.p`
  font-size: 6rem;
  font-weight: bold;

  width: 80%;
  margin-right: 10%;
  margin-top: 50%;

  ${MEDIA.PHONE`
    font-size: 5rem;
    width:100%;
    margin-top: 30%;
    margin-right: 0;
  `}
`;

export const DescriptionText = styled.p`
  font-size: 3rem;

  width: 80%;
  margin-right: 10%;
  /* margin-bottom: 25%; */

  ${MEDIA.PHONE`
    width:90%;
    margin-right: 0;
  `}
`;

export const FormContainer = styled.form`
  width: 50%;
  height: 100%;
  padding-top: 15%;

  display: flex;
  justify-content: space-evenly;
  flex-direction: column;

  ${MEDIA.PHONE`
    width: 100%;
    align-items: center;
  `}
`;

export const InputContainer = styled.div`
  position: relative;
  overflow: hidden;

  display: flex;
  align-items: center;

  margin-bottom: 20px;

  ${MEDIA.PHONE`
    width: 90%;
  `}
`;

export const InputLabel = styled.label`
  position: absolute;

  margin-left: 3%;
  color: white;
  font-family: 'Titillium Web';
  /* font-weight: bold; */
  font-size: 3rem;

  ${MEDIA.PHONE`
    font-size: 2rem;
  `}
`;

export const StyledInput = styled.input`
  background: #933b60;

  height: 35px;
  width: 600px;
  padding: 35px;

  border: none;
  border-radius: 10px;

  font-size: 3rem;
  color: #fff;

  &:focus + label {
    display: none;
  }

  &:valid + label {
    display: none;
  }

  ${MEDIA.PHONE`
    width: 100%;

    padding: 25px;
    height: 25px;

    font-size: 2rem;
  `}

  ${props =>
    props.multiline &&
    css`
      height: 150px;
      & + label {
        margin-bottom: 90px;
      }
    `}
`;

export const SubmitButton = styled.input.attrs({ type: 'submit' })`
  color: #933b60;
  font-size: 4rem;
  font-weight: bold;
  background: transparent;
  border: none;

  width: 90%;
  align-self: flex-end;

  ${MEDIA.PHONE`
    width: unset;
    margin-right: 15px;
  `}
`;
