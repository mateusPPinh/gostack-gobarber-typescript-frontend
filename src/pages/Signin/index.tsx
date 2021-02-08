import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Link, useHistory } from 'react-router-dom';
import * as yup from 'yup';

import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErrors';
import { useAuth } from '../../hooks/AuthContext';
import { useToast } from '../../hooks/ToastContext';

import { Container, Content, Background } from './styles';

import logo from '../../assets/logo.svg';

interface SignInFormData {
  email: string;
  password: string;
}

const Signin: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const { user, signIn } = useAuth();
  const { addToast } = useToast();

  console.log(user);

  // eslint-disable-next-line @typescript-eslint/ban-types
  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        const schema = yup.object().shape({
          email: yup
            .string()
            .required('O email é obrigatório')
            .email('Digite um e-mail válid'),
          password: yup.string().min(6, 'A senha precisa ter 6 dígitos'),
        });
        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          email: data.email,
          password: data.password,
        });

        history.push('/dashboard');
      } catch (err) {
        if (err instanceof yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        }

        // run a toast
        addToast({
          type: 'error',
          title: 'Erro na autenticação, tente novamente',
          description: 'Ocorreu um erro ao tentar logar, verifique seus dados.',
        });
      }
    },
    [signIn, addToast, history],
  );

  return (
    <Container>
      <Content>
        <img src={logo} alt="GoBarber Logo" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu logon</h1>

          <Input name="email" placeholder="E-mail" icon={FiMail} />

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
