import React from 'react';


const AlbumList = ({ artist, albums }) => {
  const records = albums ? (
    albums.map(album => 
      <li key={album.id}>
        {album.title}
      </li>
    )
  ) : null;

  return (
    <div>
      {artist.name}'s Albums:
        {records}
    </div>
  );
};

export default AlbumList;