import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { FiUser, FiMail, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import * as yup from 'yup';

import { Container, Background, Content } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import logo from '../../assets/logo.svg';
import getValidationErrors from '../../utils/getValidationErrors';

const Signup: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  // eslint-disable-next-line @typescript-eslint/ban-types
  const handleSubmit = useCallback(async (data: object) => {
    try {
      const schema = yup.object().shape({
        name: yup.string().required('O nome é obrigatório'),
        email: yup
          .string()
          .required('O email é obrigatório')
          .email('Digite um e-mail válid'),
        password: yup.string().min(6, 'A senha precisa ter 6 dígitos'),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      const errors = getValidationErrors(err);

      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <Background />
      <Content>
        <img src={logo} alt="GoBarber Logo" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Registre-se</h1>

          <Input name="name" icon={FiUser} placeholder="Seu nome" />

          <Input name="email" icon={FiMail} placeholder="Seu melhor e-mail" />

          <Input
            name="password"
            icon={FiLock}
            placeholder="Sua senha segura"
            type="password"
          />

          <Button type="submit">Registrar</Button>

          <Link to="/">Já tenho conta, voltar</Link>
        </Form>
      </Content>
    </Container>
  );
};

export default Signup;
