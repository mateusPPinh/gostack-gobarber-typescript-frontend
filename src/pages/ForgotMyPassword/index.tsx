import React from 'react';
import { Form } from '@unform/web';
import { FiMail } from 'react-icons/fi';

import { Container, Content, Background } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import logo from '../../assets/logo.svg';

const ForgotMyPassword: React.FC = () => {
  function handleSubmit(data: unknown): void {
    console.log(data);
  }

  return (
    <Container>
      <Content>
        <img src={logo} alt="GoBarber Logo" />

        <Form onSubmit={handleSubmit}>
          <h1>Recuperação de senha</h1>

          <Input placeholder="Seu e-mail" name="email" icon={FiMail} />

          <Button type="submit">Enviar e-mail</Button>
        </Form>
      </Content>

      <Background />
    </Container>
  );
};

export default ForgotMyPassword;
