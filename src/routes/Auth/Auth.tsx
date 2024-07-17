import React, { useState } from 'react'
import styles from './Auth.module.css'
import { Button } from '../../components'

interface IFormData {
    login: string;
    password: string;
}

const initFormData = {
    login: '',
    password: '',
}

export function Auth() {
    const [formData, setFormData] = useState<IFormData>(initFormData)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => ({...prev, [event.target.name]: event.target.value,}))
    }
    
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formData)
    }

    return (
        <section className={`container ${styles.loginbox}`}>
            <h1>Sign in</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <label htmlFor="login" className={styles.hidden}>Login</label>
                <input type='text' name='login' id='login' placeholder='Login' onChange={handleChange}/>
                <label htmlFor="password" className={styles.hidden}>Login</label>
                <input type='password' name='password' id='password' placeholder='Password'/>
                <Button content="Sign in" width={178} height={62} role='submit'></Button>
            </form>
        </section>
    )
}
