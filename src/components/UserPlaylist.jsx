import React from "react";
import Song from "./SongUserPlaylist";

function UserPlaylist (){
    return(
        <>
        <div className="bg-black text-gray-300 min-h-screen p-10">
  

    <div className="flex flex-col justify-center">
     
      <h4 className="mt-0 mb-2 uppercase text-gray-400 tracking-widest text-xs">Playlist</h4>
      <h1 className="mt-0 mb-2 text-white text-4xl">Name Playlist</h1>

      <p className="text-gray-400 text-sm">Created by <a href="#" className="text-blue-50 font-bold">User name</a> - 50 songs, 3 hr 2 min</p>

      <p className="mt-10 font-bold">Description:</p>
      <p className="my-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea quia architecto sunt animi ex officia, molestiae dignissimos doloremque dolore autem, in enim esse distinctio at? Laboriosam autem ipsum iste error.</p>
    </div>

  <div className="mt-10">
  
    <div className="flex text-gray-500">
      <div className="p-2 w-full">Title</div>
      <div className="p-2 w-12 flex-shrink-0 text-right">⏱</div>
    </div>

    <Song/>

  </div>
</div>
        </>
    )
}

export default UserPlaylist;