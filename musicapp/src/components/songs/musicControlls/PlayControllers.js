import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faForward, faBackward } from '@fortawesome/free-solid-svg-icons'
import classes from './PlayControllers.module.css'
function PlayControllers({
    isPlaying,
    setIsPlaying,
    SkipSong,
   
}) {
    return (
        <div className={classes.controlers}>
            <button className={classes.btn}>
                <FontAwesomeIcon
                
                    icon={faBackward}
                    onClick={() => SkipSong(false)}
                />
</button>

            <button className={classes.btn2} >
                <FontAwesomeIcon className={classes.inBtn} icon={isPlaying ? faPause : faPlay}
                    onClick={() => setIsPlaying(!isPlaying)} />
            </button>
            <button className={classes.btn}>
                <FontAwesomeIcon
                    icon={faForward} onClick={() => SkipSong()}
                /></button>

        </div>
    )
}

export default PlayControllers
