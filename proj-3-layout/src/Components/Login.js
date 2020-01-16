import React from 'react';
import '../App.css';

function Login() {
    return (
        <div>
            <h1>Login Page</h1>
            <form action='http://localhost:8000/api/auth' method='POST'>
                <input
                    type='text'
                    name='username'
                    placeholder='Username'
                    required
                />
                <input
                    type='text'
                    name='password'
                    placeholder='Password'
                    required
                />
                <input type='submit' value='Login'></input>
            </form>
        </div>
    );
}

export default Login;
