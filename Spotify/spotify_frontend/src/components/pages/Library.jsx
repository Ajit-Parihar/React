import React from "react";
import { useState, useEffect } from "react";
import { makeAuthenticatedGETRequest } from "../../utils/serverHelper";
import {SongCard} from '../sharedComponents/SongCard'
export function Library() {
  const [getPlayList, setGetPlayList] = useState([]);
  const [playListSong, setPlayListSong] = useState([]);
  useEffect(() => {
    const getAllPlaylist = async () => {
      const playlists = await makeAuthenticatedGETRequest("/playlist/get/me");
      setGetPlayList(playlists.data);
    };
    getAllPlaylist();
    const getFirstPlayListSong = async () => {
      // console.log(`print playlist ${getPlayList}`)
      if (Array.isArray(getPlayList) && getPlayList.length > 0) {
        const firstPlayListSongs = await makeAuthenticatedGETRequest(
          `/playlist/get/playlist/${getPlayList[0]._id}`
        );
        setPlayListSong(firstPlayListSongs.songs);
      } else {
        console.log("song not find");
      }
    };
    getFirstPlayListSong();
  },[]);

  const getPlayListSongs = async (playlistId) => {
    // console.log(`print playlistId ${playlistId}`)
    const playlistSongs = await makeAuthenticatedGETRequest(
      `/playlist/get/playlist/${playlistId}`
    );
    setPlayListSong(playlistSongs.songs);
    console.log(`print playlist by ID ${playListSong} `)
  };
  return (
    <div>
      <div className="flex">
        <div className="flex flex-col bg-gray-900 h-114 w-70 rounded gap-5 p-4">
          {getPlayList.map((playlist) => (
            <div
              className="flex gap-2 bg-gray-600 p-1 rounded cursor-pointer"
              onClick={() => getPlayListSongs(playlist._id)}
            >
              <div>
                <img src={playlist.thumbnail} className="rounded h-12 w-12" />
              </div>
              <div className="text-white">{playlist.name}</div>
            </div>
          ))}
        </div>
        <div className="bg-black h-114 w-234">
          {/* {console.log(`print playlist song ${playListSong}`)} */}
          {Array.isArray(playListSong) &&
            playListSong.map((song) => (
              <div>
                <SongCard
                  songName={song.name}
                  info={song}
                  movieName={song.movieName}
                  songThumbnail={song.thumbnail}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Library;
