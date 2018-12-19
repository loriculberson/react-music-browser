import React from 'react';


const AlbumList = ({ albums }) => {
  const records = albums ? (
    albums.map(album => 
      <li key={album.id}>
        {album.title}
      </li>
    )
  ) : null;

  return (
    <div>
      Artist
        {records}
    </div>
  );
};

export default AlbumList;