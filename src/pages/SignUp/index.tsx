import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';

import api from '../../services/api';
import { useToast } from '../../hooks/toast';
import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input/input.index';
import Button from '../../components/Button/button.index';

import { Container, Content, AnimationContainer, Background } from './styles';

interface SignUpFormData {
    name: string;
    email: string;
    password: string;
}

const schema = Yup.object().shape({
    name: Yup.string().required('Nome obrigatório'),
    email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
    password: Yup.string().min(6, 'Senha mínima de 6 dígitos').required('Senha obrigatória'),
});

const SignUp: React.FC = () => {
    const { addToast } = useToast();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<SignUpFormData>({ resolver: yupResolver(schema) });

    const onSubmit = async (data: SignUpFormData) => {
        try {
            await api.post('/users', data);
            navigate('/');
            addToast({
                type: 'success',
                title: 'Cadastro realizado!',
                description: 'Você já pode fazer seu logon no GoBarber.',
            });
        } catch {
            addToast({
                type: 'error',
                title: 'Erro no cadastro',
                description: 'Ocorreu um erro ao fazer o cadastro, tente novamente.',
            });
        }
    };

    return (
        <Container>
            <Background />
            <Content>
                <AnimationContainer>
                    <img src={logoImg} alt="GoBarber" />

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h1>Faça seu cadastro</h1>
                        <Input
                            icon={FiUser}
                            placeholder="Nome"
                            error={errors.name?.message}
                            {...register('name')}
                        />
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
                            Cadastrar
                        </Button>
                    </form>

                    <Link to="/">
                        <FiArrowLeft />
                        Voltar para Logon
                    </Link>
                </AnimationContainer>
            </Content>
        </Container>
    );
};

export default SignUp;
