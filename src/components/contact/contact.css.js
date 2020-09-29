import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  height: 80vh;
  width: 100%;
`;

export const DescriptionContainer = styled.div`
  width: 50%;
  height: 100%;

  color: #963155;
`;

export const DescriptionImageContainer = styled.div`
  height: 80%;
  width: 70%;
  margin-top: 10%;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  flex-direction: column;
`;

export const DescriptionImage = styled.img`
  height: 100%;
  /* width: 100%; */

  position: absolute;
  z-index: -1;
`;

export const DescriptionTitle = styled.p`
  font-size: 6rem;
  font-weight: bold;

  width: 80%;
`;

export const DescriptionText = styled.p`
  font-size: 3rem;

  width: 70%;
  margin-bottom: 17%;
  margin-left: -10%;
`;

export const FormContainer = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  justify-content: center;
`;

export const Input = styled.input`
  background: #963155;

  height: 35px;

  border: none;
  border-radius: 20%;
`;
