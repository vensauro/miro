import React from 'react';
import {
  Container,
  DescriptionContainer,
  DescriptionImage,
  DescriptionImageContainer,
  DescriptionText,
  DescriptionTitle,
  FormContainer,
  InputContainer,
  InputLabel,
  StyledInput,
  SubmitButton,
  Select,
} from './contact.css';
import descriptionImage from 'images/bg03.png';

function Input({ name, multiline }) {
  return (
    <InputContainer relative>
      <StyledInput
        id={name}
        required
        multiline={multiline}
        as={multiline ? 'textarea' : 'input'}
      />
      <InputLabel htmlFor={name}>{name}</InputLabel>
    </InputContainer>
  );
}

export function Contact({ reasons, visitText }) {
  return (
    <Container id="contato">
      <DescriptionContainer>
        <DescriptionImageContainer>
          <DescriptionImage
            src={descriptionImage}
            alt="imagem de detalhe sem significado"
          />
          <DescriptionTitle>
            AGENDE <br /> UMA VISITA
          </DescriptionTitle>
          <DescriptionText>{visitText}</DescriptionText>
        </DescriptionImageContainer>
      </DescriptionContainer>
      <FormContainer>
        <Input name="NOME" />
        <Input name="E-MAIL" type="email" />
        <Input name="TELEFONE" type="tel" />
        <Input name="SÉRIE PRETENDIDA" type="text" />
        <InputContainer>
          <Select
            className="react-select-container"
            classNamePrefix="react-select"
            placeholder="MOTIVO"
            options={reasons.map(e => ({ value: e, label: e }))}
          />
        </InputContainer>
        <Input name="MOTIVO" type="text" />
        <Input name="MENSAGEM" type="text" multiline />
        <InputContainer>
          <SubmitButton value="ENVIAR" />
        </InputContainer>
      </FormContainer>
    </Container>
  );
}
