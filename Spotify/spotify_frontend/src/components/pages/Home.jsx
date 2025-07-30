import React from 'react'
import { useEffect } from 'react'
import { makeAuthenticatedGETRequest } from '../../utils/serverHelper'
import {useState} from 'react'
import {SongCard} from '../sharedComponents/SongCard'
export function Home() {
    const [songData, setSongData] = useState([])
    useEffect(()=>{
        const getData = async() => {
            const response = await makeAuthenticatedGETRequest('/song/get/mysongs')
            console.log(response)
            setSongData(response.data)
        }
        getData();
    },[])
  return (
    <div>{
         songData.map((song)=>(
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

export default Home