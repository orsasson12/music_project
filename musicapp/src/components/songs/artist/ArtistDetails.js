import React  from 'react'

import classes from './ArtistDetails.module.css'
function ArtistDetails({ song, }) {
 
    return (
        <div>
         
            <div className={classes.artistContainer}>
                <div className={classes.detailsImg}>
                {song.img}
                </div>
            </div>
            <h3 className={classes.songTitle}>{song.title}</h3>
            <h4 className={classes.songArtist}>{song.artist}</h4>
        </div>
    )
}

export default ArtistDetails
