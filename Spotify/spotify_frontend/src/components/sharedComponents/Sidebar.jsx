import React from 'react'
import IconDesign from './IconDesign'
import { useLocation } from 'react-router-dom'

export function Sidebar() {
  const location = useLocation()
  console.log(location.pathname)

  return (
    <div className="w-38 h-114 bg-gray-700">
        <div>
        <IconDesign 
                iconName="material-symbols:home-rounded" 
                iconText="Home"
                width={30}
                height={30}
                iconStyling="text-white"
                textStyling="text-white font-bold"
                mainDivStyling="gap-2"
                isActive={location.pathname == "/home"}
                targetLink={"/home"}
        />
        <IconDesign 
                iconName="tabler:search" 
                iconText="Search"
                width={30}
                height={30}
                iconStyling="text-white"
                mainDivStyling="gap-2"
                isActive={location.pathname == "/search"}
                targetLink={"/search"}

        />
        <IconDesign 
                iconName="fluent:library-32-filled" 
                iconText="Library"
                width={30}
                height={30}
                iconStyling="text-white"
                mainDivStyling="gap-2"
                isActive={location.pathname == "/library"}
                targetLink={"/library"}

        />
        <IconDesign 
                iconName="entypo:music" 
                iconText="My Music"
                width={30}
                height={30}
                iconStyling="text-white"
                mainDivStyling="gap-2"
                isActive={location.pathname == "/my_music"}
                targetLink={'/my_music'}
        />
        <IconDesign
               iconName="ph:playlist-fill" 
               iconText="Create Playlist"
               width={30}
               height={30}
               iconStyling="text-white"
               mainDivStyling = "gap-2"
               isActive={location.pathname == "/playlist_create"}
               targetLink={"/playlist_create"}

        />
        </div>
    </div>
  )
}

export default Sidebar