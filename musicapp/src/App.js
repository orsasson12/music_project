import { useState, useEffect } from 'react';
import Profile from './components/accountProfile/Profile'
import Navbar from './components/navbar/Navbar';
import Play from './components/songs/play/Play';

// routes 

import { Switch, Route } from "react-router-dom";
// images 
import drake from '../src/assets/Images/drake.jpg'
import lil from './assets/Images/lilTjay.jpg'
import roddy from '../src/assets/Images/antisocial-art.png'
import travis from './assets/Images/travis-scott.jpg'
// songs 
import godPlans from '../src/assets/Music/drake_god_s_plan_5544891670362252555.mp3'
import FN from './assets/Music/lil_tjay_f_n_official_video_-7903866633127415005.mp3'
import theBox from './assets/Music/roddy_ricch_the_box_official_music_video_uCge73IByoK-gucZerCP.mp3'
import Sicko from './assets/Music/travis_scott_sicko_mode_ft_drake_-2146925337458799773.mp3'
import hot from './assets/Music/drake_hotline_bling_kykv73IByoK-gucZZUfM.mp3'

import { ProfileProvider  } from './store/ProfileContext'
import './App.css'
import Login from './components/login & register/login/Login';
import Register from './components/login & register/register/Register'
import HomePage from './components/HomePage/HomePage';
function App() {
  const [songs] = useState(
    [
      {
        title: "Drake - God's Plan",
        artist: 'Drake',
        img: <img src={drake} alt='drake' />,
        song: <audio src={godPlans}></audio>,
        isLiked: false
      },
      {
        title: "Lil Tjay - F.N (Official Video)",
        artist: 'Lil Tjay',
        img: <img src={lil} alt='LIL' />,
        song: <audio src={FN}></audio>,
        isLiked: false
      },
      {
        title: "Roddy Ricch - The Box [Official Audio]",
        artist: 'Roddy Ricch',
        img: <img src={roddy} alt='Roddy' />,
        song: <audio src={theBox}></audio>,
        isLiked: false
      },
      {
        title: "Travis Scott - SICKO MODE ft. Drake",
        artist: 'Travis Scott',
        img: <img src={travis} alt='Travis' />,
        song: <audio src={Sicko}></audio>,
        isLiked: false
      },
      {
        title: "Drake - Hotline Bling",
        artist: 'Drake',
        img: <img src={drake} alt='drake' />,
        song: <audio src={hot}></audio>,
        isLiked: false
      },
    ])

  const [currentSong, setCurrentSong] = useState(0)
  const [nextSong, setNextSong] = useState(currentSong + 1)
  const [user, setLoginUser] = useState({})
  useEffect(() => {
    setNextSong(() => {
      if (currentSong + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSong + 1
      }

    })
  }, [songs.length, currentSong])

  // const papuina = songs.filter(song => song.isLiked)

  
  return (
    <div className="App">
      <ProfileProvider >
            <Navbar />
        <Switch>
          <Route exact path="/">
            {user && user._id ? (
              <Login setLoginUser={setLoginUser} />
              ) : (
                <HomePage setLoginUser={setLoginUser} />
                )}
          </Route>
          <Route path="/login">
            {""}
            <Login setLoginUser={setLoginUser} />
          </Route>
          <Route path="/register">
            {""}
            <Register />
          </Route>
          <Route path="/profile">
            <Profile songs={songs} />
          </Route>
          <Route path="/music">
            <Play currentSong={currentSong}
              setCurrentSong={setCurrentSong}
              nextSong={nextSong}
              songs={songs} />

          </Route>
        </Switch>
      </ProfileProvider>
    </div>
  )
}
export default App;
