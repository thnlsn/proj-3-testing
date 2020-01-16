import React, { useState } from 'react';

const Login = () => {
    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const { username, email, password } = user;

    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        console.log('Login Submit');
    };

    return (
        <div className='container'>
            <h1>
                Account <span className='text-primary'>Login</span>
            </h1>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label htmlFor='email'>Email Address</label>
                    <input
                        className='form-control'
                        type='text'
                        name='email'
                        value={email}
                        onChange={onChange}
                    />
                </div>
                <div className='form-group'>
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
                    value='Login'
                    className='btn btn-primary btn-block'
                />
            </form>
        </div>
    );
};

export default Login;
