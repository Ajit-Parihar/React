import React, { useState, useLayoutEffect } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./sharedComponents/Header";
import { Footer } from "./sharedComponents/Footer";
import Sidebar from "./sharedComponents/Sidebar";
import {SongContext} from "../context/SongContext"
import { useContext, useEffect } from "react";
import {Howl} from  "howler"
import { Icon } from '@iconify/react/dist/iconify.js'

import {IconDesign} from "./sharedComponents/IconDesign"
import {InputFiled} from "./sharedComponents/InputFiled"
import { makeAuthenticatedGETRequest, makeAuthenticatedPostRequest } from "../utils/serverHelper";

export function CommonComponent() {
  const [addSongClick, setAddSongClick] = useState(false) 
  const [addSong, setAddSong] = useState("")
  const [getPlayList, setPlayList] = useState([])
  
  const {
    currentSong,
    setCurrentSong,
    soundPlayed,
    setSoundPlayed,
    isPaused,
    setIsPaused
  } = useContext(SongContext)

  useEffect(() => {
      const getPlayList=async()=>{
          const data = await makeAuthenticatedGETRequest("/playlist/get/me")
          setPlayList(data.data)
      }
      getPlayList();
  }, [addSongClick == true]);

  useLayoutEffect(()=>{
    if(!currentSong){
      return;
    }
    changeSong(currentSong.track)
  },[currentSong && currentSong.track])

  function changeSong(songSrc){
    if(soundPlayed){
        soundPlayed.stop()
    }
     const sound = new Howl({
        src: [songSrc],
        html5: true,
     });

     setSoundPlayed(sound)
     sound.play();
     setIsPaused('false')
  }
  const songPlay = () =>{
    console.log(isPaused)
     if(isPaused){
        sound.play()
     }else{
      sound.stop()
     }
  }
  const soundPlay=()=>{
    soundPlayed.play()
  }
  const soundPause=()=>{
    soundPlayed.pause()
  }
  const toggleIcon = () =>{
     if(isPaused){
        soundPause()
        setIsPaused(false)
     }else{
      soundPlay()
      setIsPaused(true)
     }
  }

  const addSongToPlayList = async(playListId) => {
       const data = {playlistId: playListId, songId: currentSong._id }
      // console.log(`print current song details ${JSON.stringify(currentSong._id)}`)
      const response = await makeAuthenticatedPostRequest('/playlist/add/song', data)
      .then((res)=>{
          setAddSongClick(false)
      }).catch((err)=>{
          setAddSongClick(true)
      })
  }

  return (
    <div className= "flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <div className="">
          <Sidebar />
        </div>

        <div className="w-full p-2 overflow-auto relative">
        <Outlet />

        {addSongClick && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
            <div className="flex flex-col bg-gray-900 h-[20rem] w-[18rem] rounded gap-5 p-4 overflow-auto">
              {getPlayList.map((playlist) => (
                <div
                  key={playlist._id}
                  className="flex gap-2 bg-gray-600 p-1 rounded cursor-pointer"
                  onClick={()=>{
                    // console.log(`print target event ${playlist._id}`)
                     addSongToPlayList(playlist._id)
                  }}
                >
                  <img src={playlist.thumbnail} className="rounded h-12 w-12" />
                  <div className="text-white">{playlist.name}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      </div>
      <Footer />
      {currentSong && (
      <div className="fixed h-20 bottom-0 left-0 w-full bg-black text-white p-4 z-50 shadow-lg">
          <div className="flex">
           <div className="flex justify-center items-center gap-2">
             <div>
              <img src={currentSong.thumbnail} height={50} width={50} className="rounded"/>
              </div>
              <div>
                <p>{currentSong.name}</p>
              </div>
           </div>
           <div className="">
              <div className="flex gap-2 justify-center items-center">
              <Icon
                icon="si:play-previous-fill" 
                width="24"
                height="24" 
              />
              <Icon 
                icon={isPaused ? "heroicons-solid:pause" : "heroicons-solid:play"} 
                width="40" 
                height="40"
                onClick={toggleIcon}
              />
              <Icon
                icon="si:play-next-fill" 
                width="24" 
                height="24" 
               />
              </div>   
              <div>
                 <input 
                  type="range"
                />
              </div>
           </div>
           <div>
            <div className="flex">
              <Icon icon="tabler:playlist-add" width="24" height="24" className="text-gray-400 hover:text-white cursor-pointer" onClick={()=>{
                  setAddSongClick(true)
              }} />
              <Icon icon="mdi:heart" width="20" height="20"  className="text-gray-400 hover:text-white cursor-pointer" />
            </div>
           </div>
           </div>
      </div>
    )}
    </div>
  );
}

export default CommonComponent;
