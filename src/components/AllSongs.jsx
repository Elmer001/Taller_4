import React from "react";
import SongAllSongs from "./SongAllSongs";

function AllSongs (){
    return(
        <>
        <div className="bg-black text-gray-300 min-h-screen p-10">
  

    <div className="flex flex-col justify-center">
     
      <h1 className="mt-0 mb-2 text-white text-4xl">All Songs</h1>

    </div>

  <div className="mt-10">
  
    <div className="flex text-gray-500">
      <div className="p-2 w-full">Title</div>
      <div className="p-2 w-12 flex-shrink-0 text-right">⏱</div>
    </div>
    <SongAllSongs/>
    <SongAllSongs/>
    <SongAllSongs/>
    <SongAllSongs/>
    <SongAllSongs/>

  </div>
</div>
        </>
    )
}

export default AllSongs;