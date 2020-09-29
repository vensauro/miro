import React from 'react';
import {
  Container,
  DescriptionContainer,
  DescriptionImage,
  DescriptionImageContainer,
  DescriptionText,
  DescriptionTitle,
  FormContainer,
  Input,
} from './contact.css';
import descriptionImage from 'images/bg03.png';

export function Contact() {
  return (
    <Container>
      <DescriptionContainer>
        <DescriptionImageContainer>
          <DescriptionImage
            src={descriptionImage}
            alt="imagem de detalhe sem significado"
          />
          <DescriptionTitle>AGENDE UMA VISITA</DescriptionTitle>
          <DescriptionText>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </DescriptionText>
        </DescriptionImageContainer>
      </DescriptionContainer>
      <FormContainer>
        <Input />
      </FormContainer>
    </Container>
  );
}
