import React, { Component } from 'react';
import LoginForm from '../components/Auth/LoginForm'

import './Login.css';

class Login extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="login-container">
                    <LoginForm />
                </div>
            </div>
        );
    }
}

export default Login;