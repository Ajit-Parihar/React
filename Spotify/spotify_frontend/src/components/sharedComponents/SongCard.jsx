import React from 'react'
import {SongContext} from '../../context/SongContext'
import { useContext } from 'react'
export function SongCard({songName, movieName, songThumbnail,info}) {
   const {currentSong, setCurrentSong} = useContext(SongContext)
  return (
    <div className="flex flex-col items-center  p-4 gap-2 border-2 border-gray-400 rounded bg-gray-800 w-46" onClick={()=>{
      setCurrentSong(info);
      console.log("click successfully")
      }}>
         <div>
             <img className="rounded" src = {songThumbnail} alt="Image Not found"/>
         </div>
         <div>
             <h3 className="text-white">{songName}</h3>
         </div>
         <div>
            <p className = "text-white">{movieName}</p>
         </div>
    </div>
  )
}

export default SongCard