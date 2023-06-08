import React, { useState } from 'react'

// Styles
import styles from '../styles/login.module.css'

// Router
import { useLoaderData, Form, redirect, useNavigate } from 'react-router-dom'

// API
import { loginUser } from '../api'

export function loginLoader({ request}) {
  return new URL(request.url).searchParams.get('message');
}

export async function action({ request }) {
  const formData = await request.formData()
  const email = formData.get("email")
  const password = formData.get("password")
  const data = await loginUser({ email, password })
  localStorage.setItem("loggedin", true)
  
  return redirect("about")
}

const Login = () => {
    const [ status, setStatus ] = useState('idle')
    const [ error, setError ] = useState(null)
    const navigate = useNavigate();
    const data = useLoaderData();

  return (
    <div className={styles.login_container}>
      {data && <h4>{data}</h4>}
      {error && <h4>{error.message}</h4>}
        <h3>Sign In To Your Account</h3>
        <Form 
                method="post" 
                className="login-form" 
                replace
            >
                <input
                    name="email"
                    type="email"
                    placeholder="Email address"
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                />
                <button
                    disabled={status === "submitting"}
                >
                    {status === "submitting"
                        ? "Logging in..."
                        : "Log in"
                    }
                </button>
            </Form>
    </div>
  )
}

export default Login
