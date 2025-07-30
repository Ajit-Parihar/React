import { useState } from 'react'
import './App.css'
import CommonComponent from './components/CommonComponent'
import {Login} from './components/pages/Login'
import {SignUp} from './components/pages/SignUp'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import {Home} from './components/pages/Home'
import {SongContext} from "./context/SongContext"
import {Search} from "./components/pages/Search"
import {Library} from "./components/pages/Library"
import {MyMusic} from "./components/pages/MyMusic"
import {CreatePlaylist} from "./components/pages/CreatePlaylist"


function App() {
  const[currentSong, setCurrentSong] = useState(null);
  const[isPaused, setIsPaused] = useState(true);
  const[soundPlayed, setSoundPlayed] = useState(null);
  return (
    <BrowserRouter>

        <SongContext.Provider 
          value={{
            currentSong, 
            setCurrentSong,
            soundPlayed,
            setSoundPlayed,
            isPaused,
            setIsPaused,
          }}
        >
         
      <Routes>
         <Route path="/" element={<CommonComponent />}>
             <Route path="/home" element={<Home/>}/>
             <Route path="/search" element={<Search/>}/>
             <Route path="/library" element={<Library/>}/>
             <Route path="/my_music" element={<MyMusic/>}/>
             <Route path="/playlist_create" element={<CreatePlaylist/>}/>
             
         </Route>
         <Route path="/login" element={<Login/>}/>
         <Route path='/sign_up' element={<SignUp/>}/>
      </Routes>
    </SongContext.Provider>
    </BrowserRouter>
  )
}

export default App
