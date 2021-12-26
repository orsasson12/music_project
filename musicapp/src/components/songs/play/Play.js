import React, { useState, useRef, useEffect } from 'react'
import PlayControllers from '../musicControlls/PlayControllers'
import classes from './Play.module.css'

// font awsome
import ArtistCard from '../artist/ArtistCard'

function Play({ songs, nextSong, currentSong, setCurrentSong }) {
    const AudioEl = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [favorites, setFavorites] = useState([])
    useEffect(() => {
        if (isPlaying) {
            AudioEl.current.play()
        } else {
            AudioEl.current.pause()
        }
    })


    const SkipSong = (forwards = true) => {
        if (forwards) {
            setCurrentSong(() => {
                let temp = currentSong
                temp++
                if (temp > songs.length - 1) {
                    temp = 0
                }

                return temp
            })
        } else {
            setCurrentSong(() => {
                let temp = currentSong

                temp--
                if (temp < 0) {
                    temp = songs.length - 1
                }


                return temp
            })
        }
    }

    const addFavoriteSong = (song) => {
        let newFavorites;
        if (song.isLiked) {
            newFavorites = favorites.filter(iterSong => iterSong !== song)
        } else {
            newFavorites = [...favorites, song]
        }
        song.isLiked = !song.isLiked
        setFavorites(newFavorites)
    }


    return (
        <div className={classes.cPlayer}>
            <audio src={songs[currentSong].song.props.src} ref={AudioEl}></audio>
            <h4 className={classes.cPlayerH4}>Playing now 🎶</h4>

            <ArtistCard song={songs[currentSong]} handelFavoritesClick={addFavoriteSong} />
            <PlayControllers
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                SkipSong={SkipSong} />
            <p><strong>Next up:</strong>{songs[nextSong].title} by {songs[nextSong].artist}</p>
        </div>
    )
}

export default Play
