import React, { useContext, useState } from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBars, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { ProfileContext } from '../../store/ProfileContext'
function Navbar() {
    let { currentUser, setCurrentUser } = useContext(ProfileContext)
    const [showLinks, setShowLinks] = useState(false)


    const clickHandler = () => {
        if (currentUser) {
            setCurrentUser('')
        }
    }

    return (

        <div className="navBar">

            <div className="leftSide">
                <div className="links" id={showLinks ? "hidden" : ''}>
                    <Link to="/music">Music🎧</Link>

                    <Link to="/profile">
                        <FontAwesomeIcon icon={faUser} />
                        {currentUser}</Link>
                    <Link to={'/'} onClick={clickHandler} >LogOut👋</Link >

                </div>
                <button onClick={() => setShowLinks(!showLinks)}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </div>
            <div className="rightSide">
                <input type="text" placeholder="Search Song" />
                <button><FontAwesomeIcon icon={faSearch} /></button>
            </div>



        </div>
    )

}

export default Navbar
