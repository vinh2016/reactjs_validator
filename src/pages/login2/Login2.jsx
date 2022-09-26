import { useForm } from 'react-hook-form';
import React from "react";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './Login2.css';

const schema = yup
  .object()
  .shape({
    username: yup.string().required(),
    password: yup.string().required().min(5),
    email: yup.string().required('Please enter email').email(),
  })
  .required();

function Login2(props) {
    const content = {
        inputs: [
            {
                label: 'Username',
                name: 'username',
                type: 'text',
            },
            {
                label: 'Email',
                name: 'email',
                type: 'email',
            },
            {
                label: 'Password',
                name: 'password',
                type: 'password',
            },
        ]
    };

    const { register, handleSubmit, formState: {errors}, } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        console.log(data);
    }

    console.log('errors', errors);

    return (
        <div className="App">
            <h1>React-hook-form</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                {content.inputs.map((input, key) => {
                    return (
                        <div key={key}>
                            <p><label className="label">{input.label}</label></p>
                            <p><input name={input.name} className="input" type={input.type} {...register(input.name)} /></p>
                            <p className='messages'>{errors[input.name] ? errors[input.name].message : ''}</p>
                        </div>
                    )
                })}
                <button className="btn" type="submit">Submmit</button>
            </form>
        </div>
    )
}

export default Login2;