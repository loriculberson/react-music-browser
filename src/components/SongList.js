import React from 'react';

const SongList = ({songs}) => {
console.log(`songs`, songs);
const albumSongs = songs.map(song => 
  <li key={song.id}>{song.title} | {song.length} | {song.rating}</li>  
)
  return (
    <div>
      <h2>Song List</h2>
      {albumSongs}
    </div>
  );
};

export default SongList;