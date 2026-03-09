import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { FiLock, FiLogIn, FiMail } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';
import Button from '../../components/Button/button.index';
import Input from '../../components/Input/input.index';

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';
import { Background, Container, AnimationContainer, Content } from './styles';

interface SignInFormData {
    email: string;
    password: string;
}

const schema = Yup.object().shape({
    email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
    password: Yup.string().min(6, 'Senha mínima de 6 dígitos').required('Senha obrigatória'),
});

const SignIn: React.FC = () => {
    const { signIn } = useAuth();
    const { addToast } = useToast();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<SignInFormData>({ resolver: yupResolver(schema) });

    const onSubmit = async (data: SignInFormData) => {
        try {
            await signIn({ email: data.email, password: data.password });
            navigate('/dashboard');
        } catch {
            addToast({
                type: 'error',
                title: 'Erro na autenticação',
                description: 'Ocorreu um erro ao fazer login. Cheque as credenciais.',
            });
        }
    };

    return (
        <Container>
            <Content>
                <AnimationContainer>
                    <img src={logoImg} alt="GoBarber" />

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h1>Faça seu logon</h1>
                        <Input
                            icon={FiMail}
                            placeholder="E-mail"
                            error={errors.email?.message}
                            {...register('email')}
                        />
                        <Input
                            icon={FiLock}
                            type="password"
                            placeholder="Senha"
                            error={errors.password?.message}
                            {...register('password')}
                        />
                        <Button type="submit" disabled={isSubmitting}>
                            Entrar
                        </Button>
                        <a href="forgot">Esqueci minha senha</a>
                    </form>

                    <Link to="/sign-up">
                        <FiLogIn />
                        Criar Conta
                    </Link>
                </AnimationContainer>
            </Content>
            <Background />
        </Container>
    );
};

export default SignIn;
