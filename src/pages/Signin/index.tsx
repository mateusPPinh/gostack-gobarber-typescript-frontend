import React from 'react';
import { Form } from '@unform/web';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import Input from '../../components/Input';
import Button from '../../components/Button';
import { Container, Content, Background } from './styles';

import logo from '../../assets/logo.svg';

const Signin: React.FC = () => {
  function handleSubmit(data: unknown): void {
    console.log(data);
  }

  return (
    <Container>
      <Content>
        <img src={logo} alt="GoBarber Logo" />

        <Form onSubmit={handleSubmit}>
          <h1>Faça seu logon</h1>

          <Input name="name" placeholder="E-mail" icon={FiMail} />

          <Input
            name="password"
            placeholder="Sua senha"
            type="password"
            icon={FiLock}
          />

          <Button type="submit">Logar</Button>

          <Link to="/forgot-password">Esqueci minha senha</Link>
        </Form>

        <Link to="/register">
          <FiLogIn color="#ff9000" size={20} />
          Não tenho conta
        </Link>
      </Content>

      <Background />
    </Container>
  );
};

export default Signin;
