import React, { useCallback } from 'react';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Form } from '@unform/web';
import { Container, Content, Background } from './sign-up.styles';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input/input.index';
import Button from '../../components/Button/button.index';

const SignUp: React.FC = () => {
    const handleSubmit = useCallback((data: Record<string, unknown>) => {
        console.log(data);
    }, []);
    return (
        <Container>
            <Background />
            <Content>
                <img src={logoImg} alt="GoBarber" />

                <Form onSubmit={handleSubmit}>
                    <h1>Faça seu logon</h1>
                    <Input name="name" icon={FiUser} placeholder="Nome" />
                    <Input name="email" icon={FiMail} placeholder="E-mail" />
                    <Input name="password" icon={FiLock} type="password" placeholder="Senha" />
                    <Button name="submit" type="submit">
                        Cadastrar
                    </Button>
                </Form>
                <a href="login">
                    <FiArrowLeft />
                    Voltar para Logon
                </a>
            </Content>
        </Container>
    );
};

export default SignUp;
