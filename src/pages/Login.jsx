import React, { useState } from 'react'

// Styles
import styles from '../styles/login.module.css'

const Login = () => {
    const [ loginFormData, setLoginFormData ] = useState({email: '', password: ''})
    const handleSubmit = (e) => {
        e.preventDefault();

    }

    const handleChange = (e) => {

    }
  return (
    <div className={styles.login_container}>
        <h3>Sign In To Your Account</h3>
        <form onSubmit={handleSubmit} className={styles.form_container}>
            <input  type="email" 
                    name='email' 
                    placeholder='Email Address' 
                    onChange={handleChange}
                    value={loginFormData.email}
                    className={styles.email_input}/>
            <input  type="password" 
                    name='password' 
                    placeholder='Password' 
                    onChange={handleChange}
                    value={loginFormData.password}
                    className={styles.password_input}/>
        </form>
      
    </div>
  )
}

export default Login
