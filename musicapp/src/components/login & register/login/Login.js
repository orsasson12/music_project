import React, { useContext, useState } from 'react'
import classes from './Login.module.css'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { ProfileContext } from '../../../store/ProfileContext'
function Login({ setLoginUser }) {
    const { setCurrentUser } = useContext(ProfileContext)
    const history = useHistory()

    const [user, setUser] = useState({
        email: '',
        password: '',

    });

    const changeHandler = e => {
        const { name, value } = e.target


        setUser({
            ...user,
            [name]: value,
        });
    };


    const login = () => {
        axios.post('http://localhost:3000/login', user).then((res) => {
            setLoginUser(res.data)
            setCurrentUser(res.data.name)
            
            history.push('/profile')
        }).catch((error) => {
            console.log(error, 'from login');
        })
    }

    return (
        <div className={classes.login}>
            <h1>Login</h1>

            <input onChange={changeHandler}
                value={user.email}
                name="email"
                type='text'
                placeholder="Enter Your email" />
            <input onChange={changeHandler}
                value={user.password}
                name="password"
                type='password'
                placeholder="Enter Your password" />


            <div className={classes.button} onClick={login}>
                Login
            </div>
            <div>or</div>
            <div className={classes.button} onClick={() => history.push('/register')} >
                Register
            </div>
        </div>
    )
}

export default Login
