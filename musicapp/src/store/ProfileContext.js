import { createContext } from 'react'
import { useState } from 'react'

export const ProfileContext = createContext(null)
export const ProfileProvider = (props) => {
    const [currentUser, setCurrentUser] = useState(null)
    return (
        <ProfileContext.Provider value={{ currentUser, setCurrentUser}}>
            {props.children}
        </ProfileContext.Provider>
    )
}