import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import Input from '../../components/Input/input.index';
import Button from '../../components/Button/button.index';
import { Container, Content, Background } from './sign-in.styles';
import logoImg from '../../assets/logo.svg';

const SignIn: React.FC = () => (
    <Container>
        <Content>
            <img src={logoImg} alt="GoBarber" />

            <form>
                <h1>Faça seu logon</h1>
                <Input name="email" icon={FiMail} placeholder="E-mail" />
                <Input name="password" icon={FiLock} type="password" placeholder="Senha" />
                <Button name="submit" type="submit">
                    Entrar
                </Button>
                <a href="forgot">Esqueci minha senha</a>
            </form>
            <a href="/sign-up">
                <FiLogIn />
                Criar Conta
            </a>
        </Content>
        <Background />
    </Container>
);

export default SignIn;
