import React, { useState } from 'react';
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
import NumberFormat from 'react-number-format';
import { formatToPhone } from 'brazilian-values';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

function Input({ name, multiline, ...rest }) {
  return (
    <InputContainer relative>
      <StyledInput
        id={name}
        required
        multiline={multiline}
        as={multiline ? 'textarea' : 'input'}
        {...rest}
      />
      <InputLabel htmlFor={name}>{name}</InputLabel>
    </InputContainer>
  );
}

export function Contact({ reasons, visitText }) {
  const [formValues, setFormValues] = useState({
    nome: '',
    email: '',
    telefone: '',
    serie: '',
    motivo: null,
    mensagem: '',
  });

  function changeValue(name, getFn = e => e.target.value) {
    return event => {
      event.persist && event.persist();
      setFormValues(old => ({ ...old, [name]: getFn(event) }));
    };
  }

  async function submit(e) {
    e.preventDefault();
    const raw = await fetch(`${window.location}.netlify/functions/index`, {
      method: 'POST',
      body: JSON.stringify({
        ...formValues,
        motivo: formValues.motivo.value,
      }),
    });
    if (raw.status === 200) toast.success('Mensagem enviada!');
    else toast.error('Problema ao enviar mensagem');
  }
  return (
    <Container id="contato" onSubmit={submit}>
      <ToastContainer />
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
        <Input
          name="NOME"
          value={formValues.nome}
          onChange={changeValue('nome')}
        />
        <Input
          name="E-MAIL"
          type="email"
          value={formValues.email}
          onChange={changeValue('email')}
        />
        <NumberFormat
          customInput={Input}
          format={e => formatToPhone(e.slice(0, 11))}
          name="TELEFONE"
          type="tel"
          value={formValues.telefone}
          onValueChange={changeValue('telefone', value => value.formattedValue)}
        />

        <Input
          name="SÉRIE PRETENDIDA"
          type="text"
          value={formValues.serie}
          onChange={changeValue('serie')}
        />
        <InputContainer>
          <Select
            className="react-select-container"
            classNamePrefix="react-select"
            placeholder="MOTIVO"
            options={reasons.map(e => ({ value: e, label: e }))}
            value={formValues.motivo}
            onChange={changeValue('motivo', value => value)}
          />
        </InputContainer>
        <Input
          name="MENSAGEM"
          type="text"
          multiline
          value={formValues.mensagem}
          onChange={changeValue('mensagem')}
        />
        <InputContainer>
          <SubmitButton value="ENVIAR" />
        </InputContainer>
      </FormContainer>
    </Container>
  );
}
