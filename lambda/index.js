const querystring = require('querystring');
const mailgun = require('mailgun-js');

exports.handler = async (event, context) => {
  const {
    MAILGUN_DOMAIN,
    MAILGUN_API_KEY,
    MAILGUN_FROM,
    EMAIL_MIRO,
  } = process.env;
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const params = querystring.parse(event.body);

  const mg = mailgun({
    apiKey: MAILGUN_API_KEY,
    domain: MAILGUN_DOMAIN,
  });
  try {
    await mg.messages().send({
      from: MAILGUN_FROM,
      to: params.email,
      subject: 'Confirmação de mensagem ao Colégio Miró',
      html: `
Olá ${params.nome}, confirmamos que sua mensagem foi enviada para o Colégio Miró. <br/>
Agradecemos a paciência.
    `,
    });

    await mg.messages().send({
      from: MAILGUN_FROM,
      to: EMAIL_MIRO,
      subject: 'Email do site matricula2021.colegiomiro.com.br',
      html: `
<h1> Mensagem de ${params.nome} </h1>
<p> email: ${params.email} </p>
<p> telefone: ${params.telefone} </p>
<p> série pretendida: ${params.serie} </p>
<p> motivo: ${params.motivo} </p>
<p> mensagem: ${params.mensagem} </p>
    `,
    });
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: 'Error',
    };
  }

  return {
    statusCode: 200,
    body: 'Sucess',
  };
};
