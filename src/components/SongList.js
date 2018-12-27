import React from 'react';

const SongList = ({songs}) => {
console.log(`songs`, songs);
const albumSongs = songs.map(song => 
  <li key={song.id}>{song.title} | {song.length} | {song.rating}</li>  
)
  return (
    <section className="songs">
      <h4>Song List</h4>
      
        <ul>
          {albumSongs}
        </ul>
    </section>
  );
};

export default SongList;