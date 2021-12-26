import React from 'react'
import classes from './MusicList.module.css'

function MusicList({ songs }) {
    const filteredSongs = songs.filter((song) => song.isLiked)


    return (
        <div className={classes.musicListContainer}>

            {filteredSongs.map((favSong, key) => {

              
                return (
                    <div key={key} className={classes.musicItem}>
                        <img src={favSong.img.props.src} alt={favSong.artist} />
                        <h2>{favSong.title}</h2>
                    </div>
                )
            })}


        </div>
    )

}



// <div className='favoriteContainer'>
//     <div>
//         <img className="images" src={songs.img.props.src} alt="song" />
//     </div>
//     <div>
//         <h2>{title}</h2>
//     </div>
// </div>
export default MusicList
