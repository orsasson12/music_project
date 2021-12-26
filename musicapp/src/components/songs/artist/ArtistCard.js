import React from 'react'
import ArtistDetails from './ArtistDetails'
import classes from './ArtistDetails.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faHeartBroken } from '@fortawesome/free-solid-svg-icons'
function ArtistCard({ handelFavoritesClick, song }) {

    return (
        <div>
            <div className={classes.fav}>
                <FontAwesomeIcon className={classes.icon} icon={song.isLiked ? faHeart : faHeartBroken}
                    onClick={() => handelFavoritesClick(song)}
                /></div>
            <ArtistDetails song={song} />
        </div>
    )
}

export default ArtistCard
