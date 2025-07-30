import React from "react";
import { useState } from "react";
import { InputFiled } from "../sharedComponents/InputFiled";
import { makeAuthenticatedGETRequest } from "../../utils/serverHelper";
import {SongCard} from "../sharedComponents/SongCard"
export function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [searchSongs, setSearchSongs] = useState([]);

  const DataFetch = async () => {
    const data = { searchValue };
    const response = await makeAuthenticatedGETRequest(
      `/song/get/songname/` + searchValue
    );
    console.log("print response", JSON.stringify(response));
    setSearchSongs(response.data);
    setSearchValue("");
  };

  return (
    <div>
      <div>
        <InputFiled
          type="text"
          labelText="Search Bar"
          placeholder="search..."
          value={searchValue}
          setValue={setSearchValue}
        />
        <br />
        <button
          onClick={DataFetch}
          className="text-white bg-gray-600 rounded ml-28 w-20"
        >
          Search
        </button>
      </div>
      <div>
        {searchSongs.map((song) => (
          <div>
           <SongCard
              songName={song.name}
              info={song}
              movieName = {song.movieName}
              songThumbnail = {song.thumbnail}             
          />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
