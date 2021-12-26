import React from 'react'
import MusicList from './MusicList';

function Profile({ songs }) {
    
    return (
        <>
           
            <h2 style={{ textAlign: "center", marginTop: '20px', marginBottom: '5px' }}>Favorites Songs 🎶</h2>
            <MusicList songs={songs} />
        </>
    )
}

export default Profile
