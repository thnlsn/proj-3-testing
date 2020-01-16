import React, { useState, useContext } from 'react';
import UserContext from '../../context/user/userContext';

const Register = () => {
    const userContext = useContext(UserContext);

    const { register } = userContext;

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = user;

    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        register({
            name,
            email,
            password
        });
    };

    return (
        <div className='container w-50 p-3'>
            <h1>
                Account <span className='text-primary'>Register</span>
            </h1>
            <form onSubmit={onSubmit}>
                <div className='form-group text-left'>
                    <label htmlFor='name'>Name</label>
                    <input
                        className='form-control'
                        type='text'
                        name='name'
                        value={name}
                        onChange={onChange}
                    />
                </div>
                <div className='form-group text-left'>
                    <label htmlFor='email'>Email Address</label>
                    <input
                        className='form-control'
                        type='text'
                        name='email'
                        value={email}
                        onChange={onChange}
                    />
                </div>
                <div className='form-group text-left'>
                    <label htmlFor='password'>Password</label>
                    <input
                        className='form-control'
                        type='text'
                        name='password'
                        value={password}
                        onChange={onChange}
                    />
                </div>
                <input
                    type='submit'
                    value='Register'
                    className='btn btn-primary btn-block'
                />
            </form>
        </div>
    );
};

export default Register;
