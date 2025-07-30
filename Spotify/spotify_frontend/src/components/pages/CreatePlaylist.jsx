import React from 'react'
import { useState } from 'react'
import {InputFiled} from "../sharedComponents/InputFiled"
import { makeAuthenticatedPostRequest } from '../../utils/serverHelper'
import { useNavigate } from 'react-router-dom'

export function CreatePlaylist() {
  const [playListName, setPlayListName] = useState("")
  const [playListThumbnail, setPlayListThumbnail] = useState("")
  const navigate = useNavigate()
  const addPlaylist = async() => {
       const data = {name:playListName, thumbnail:playListThumbnail, songs:[]}
       const response = makeAuthenticatedPostRequest("/playlist/create", data)
       console.log(response)
       navigate("/home")
  }
  return (
    <div>
        <div className = "text-white">CreatePlaylist</div>
        <div className = "flex flex-col items-center gap-2">
           <div>
                <InputFiled
                    type = "text"
                    labelText= "Name"
                    placeholder="Enter Playlist Name"
                    value = {playListName}
                    setValue = {setPlayListName}
                />
           </div>
                <InputFiled
                    type = "text"
                    labelText = "Add Playlist Thumbnail"
                    placeholder= "Enter Image Url"
                    value = {playListThumbnail}
                    setValue = {setPlayListThumbnail}
                />
           <div>
            <div>
               <button onClick = {addPlaylist} className="text-white w- bg-gray-600 rounded ml-28 w-30">Create Playlist</button>
            </div>
           </div>
        </div>
    </div>
  )
}

export default CreatePlaylist