import axios from 'axios';
import React, {useState } from 'react'
import classes from './Register.module.css'
import { useHistory } from 'react-router-dom'


const Register = () => {
   
    const history = useHistory()
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        reEnteredPassword: ''
    })
   

    const handelChange = (e) => {
        const { name, value } = e.target;

        setUser({
            ...user,
            [name]: value
        })
    }


    const register = () => {
        const { name, email, password, reEnteredPassword } = user
        if (name && email && password && (password === reEnteredPassword)) {
            axios.post("http://localhost:3000/register", user)
                .then(res => {
                    console.log(res.data);
                    history.push('/login')
                    // alert(res.data.message)
                }).catch((error) => {
                    alert(error.response.data);
                })
            }else {
            alert('invailid Input')
        }
    }


    return (
        <div className={classes.register}>
            <h1>Register</h1>
            <input
                type="text"
                onChange={handelChange}
                name='name'
                value={user.name}
                placeholder='Enter Your Name' />
            <input
                type="email"
                onChange={handelChange}
                name='email'
                value={user.email}
                placeholder='Enter Your email' />

            <input
                type="password"
                onChange={handelChange}
                name='password'
                value={user.password}
                placeholder='Enter Your password' />
            <input
                type="password"
                onChange={handelChange}
                name='reEnteredPassword'
                value={user.reEnteredPassword}
                placeholder='Enter Your reEnteredPassword' />
            <div className={classes.button} onClick={register}>
                Register
            </div>
            <div>Already have an account?</div>
            <div className={classes.button} onClick={() => history.push('/login')}>Login</div>
        </div>
    )
}

export default Register