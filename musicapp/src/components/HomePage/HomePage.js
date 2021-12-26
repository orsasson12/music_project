import React from 'react'
import { useHistory } from 'react-router-dom'
import './HomePage.css'
function HomePage() {
    const history = useHistory()
    return (
        <div className="header-container">
            <div className="lottie-side">
                <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_69HH48.json" background="transparent" speed="2" loop autoplay></lottie-player>
            </div>
            <div className="buttons-side">
                <button onClick={() => history.push('/register')}>SIGN IN</button>
                <button onClick={() => history.push('/login')}>LOG IN</button>
            </div>
        </div>
    )
}

export default HomePage
