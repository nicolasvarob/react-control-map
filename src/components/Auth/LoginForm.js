import React from 'react'
import { Formik } from 'formik'
//import validate from './validate-spected'
//import getValidationSchema from './getValidationSchema-spected'
import './LoginForm.css'

const initialValues = {
    email: '',
    password: '',
    passwordConfirmation: '',
    consent: false,
}

export default function SignUpFormContainer() {
    return (
        <Formik
            initialValues={initialValues}
            //validate={validate(getValidationSchema)}
            onSubmit={onSubmit}
            render={SignUpForm}
        />
    )
}

function SignUpForm(props) {
    const { isSubmitting, errors, handleChange, handleSubmit } = props

    return (
        <div className="row form-wrapper">
            <div className="col no-padding-left">
                <div className="left-image-container">
                </div>
            </div>
            <div className="col-8">
                <div className="content">
                    <h1> <span className="lighter">Bienvenido a</span> Security</h1>
                    <p>Para acceder al panel de monitoreo, por favor ingresa tus datos. </p>
                </div>
                <div className="form">
                    <div className="inputs-wrapper">
                        <input className="control" name="email" type="email" onChange={handleChange} />
                        <div className="form-field-error">{errors.email}</div>
                        <input className="control" name="password" type="password" onChange={handleChange} />
                        <div className="form-field-error">{errors.password}</div>
                    </div>
                    <button type="button" class="btn btn-light" onClick={handleSubmit}>{isSubmitting ? 'Loading' : 'Login'}</button>
                </div>
            </div>
        </div>
    )
}

function onSubmit(values, { setSubmitting, setErrors }) {
    setTimeout(() => {
        console.log('User has been sucessfully saved!', values)
        setSubmitting(false)
    }, 2000)
}