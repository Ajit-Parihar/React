import { createContext } from "react";

export const SongContext = createContext({
    currentSong: null,
    setCurrentSong: (currentSong)=>{}
})

export default SongContext