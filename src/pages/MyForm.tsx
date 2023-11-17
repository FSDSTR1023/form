/* eslint-disable */

import React from 'react';
import { useForm } from 'react-hook-form';
import DynamicInput from '../components/DynamicInput';
import { ErrorForm } from '../components/ErrorForm';

const MyForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <DynamicInput
                type="text"
                name="username"
                label="Nombre de usuario"
                placeholder="Username"
                {...register('username', { required: 'Username is required' })}
            />
            {errors.username && <ErrorForm error={errors.username.message} />}

            <DynamicInput
                type="email"
                name="email"
                label="Correo electrónico"
                placeholder="Email"
                {...register('email', { required: 'Email is required' })}
            />
            {errors.email && <ErrorForm error={errors.email.message} />}

            <DynamicInput
                type="password"
                name="credentials"
                label="Credenciales"
                placeholder="Credentials"
                {...register('credentials', { required: 'Credentials is required' })}
            />
            {errors.credentials && <ErrorForm error={errors.credentials.message} />}


            <button type="submit">Submit</button>
        </form>
    );
};

export default MyForm;
