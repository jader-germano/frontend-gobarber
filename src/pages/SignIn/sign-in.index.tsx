import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import React, { useCallback, useRef } from 'react';
import { FiLock, FiLogIn, FiMail } from 'react-icons/fi';

import * as Yup from 'yup';
import logoImg from '../../assets/logo.svg';
import Button from '../../components/Button/button.index';
import Input from '../../components/Input/input.index';
import getValidationErrors from '../../utils/getValidationErrors';
import { Background, Container, Content } from './sign-in.styles';

const SignIn: React.FC = () => {
    const formRef = useRef<FormHandles>(null);

    const handleSubmit = useCallback(async (data: Record<string, unknown>) => {
        try {
            formRef.current?.setErrors({});
            const schema = Yup.object().shape({
                email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
                password: Yup.string().min(6, 'Senha obrigatória. Mínimo de 6 dígitos'),
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
            <Content>
                <img src={logoImg} alt="GoBarber" />

                <Form ref={formRef} onSubmit={handleSubmit}>
                    <h1>Faça seu logon</h1>
                    <Input name="email" icon={FiMail} placeholder="E-mail" />
                    <Input name="password" icon={FiLock} type="password" placeholder="Senha" />
                    <Button name="submit" type="submit">
                        Entrar
                    </Button>
                    <a href="forgot">Esqueci minha senha</a>
                </Form>
                <a href="/sign-up">
                    <FiLogIn />
                    Criar Conta
                </a>
            </Content>
            <Background />
        </Container>
    );
};

export default SignIn;
