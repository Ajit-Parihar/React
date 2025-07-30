import React from 'react'
import {useState, useEffect} from "react"
import {SongCard} from "../sharedComponents/SongCard"
import { makeAuthenticatedGETRequest } from "../../utils/serverHelper";

export function MyMusic() {
  const [songsData, setSongsData] = useState([])
  useEffect(()=>{
     const FetchMySongs = async() =>{
         const response = await makeAuthenticatedGETRequest("/song/get/mysongs")
         setSongsData(response.data)
     }
     FetchMySongs();
  },[])
  return (
    <div>
      {
        songsData.map((song)=>(
         
            <SongCard
                  songName={song.name}
                  info={song}
                  movieName = {song.movieName}
                  songThumbnail = {song.thumbnail}             
              />
        ))
      }

    </div>
  )
}

export default MyMusic