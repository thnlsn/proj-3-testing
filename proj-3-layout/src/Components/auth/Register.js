import React, { useState, useContext } from 'react';
import UserContext from '../../context/user/userContext';
import AlertContext from '../../context/alert/alertContext';

const Register = () => {
    const userContext = useContext(UserContext);
    const { register } = userContext;

    const alertContext = useContext(AlertContext);
    const { setAlert, removeAlert } = alertContext;

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2 } = user;

    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        // I want to add an else/if here to remove alert if one exists already

        if (name === '' || email === '' || password === '') {
            setAlert('Please enter all fields', 'danger');
        } else if (password !== password2) {
            setAlert('Passwords do not match', 'danger');
        } else {
            register({
                name,
                email,
                password,
                password2
            });
        }
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
                        type='password'
                        name='password'
                        value={password}
                        onChange={onChange}
                    />{' '}
                </div>
                <div className='form-group text-left'>
                    <label htmlFor='password2'>Confirm Password</label>
                    <input
                        className='form-control'
                        type='password'
                        name='password2'
                        value={password2}
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
