import React from 'react';


const AlbumList = ({ match, artists }) => {
  // console.log(`Artists`, artists)
  const artist = artists.find(artist => artist.id === Number(match.params.id));
  // console.log(`Artist`, artist);

  const albums = artist ? (
    artist.albums.map(album => 
      <li key={album.id}>
        {album.title}
      </li>
    )
  ) : null;

  return (
    <div>
      Artist
        {albums}
    </div>
  );
};

export default AlbumList;