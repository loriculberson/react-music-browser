import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import SongList from './SongList';

const AlbumList = ({ artist, albums, match }) => {
  const records = albums ? (
    albums.map(album => 
      <li key={album.id}>
        <NavLink to={`${match.url}/albums/${album.id}`}>{album.title}</NavLink>
      </li>
    )
  ) : null;

  const songList = ({match}) => {
    // const { match, artist } = props;
    console.log(`match`, match);
    // console.log(`albumid`, props.match.params.albumId)
    //find the album based on the album id
    //render SongList component
    //pass into SL the songs array

    const songs = albums.find(album => album.id === Number(match.params.albumId)).songs;
    return (
      albums ?
      <SongList songs={songs} /> :
      <h2>Loading...</h2>
     );
  }

  return (
    <section>
      {artist.name}'s Albums:
        {records}
      <section>
        <Route 
          path={`${match.path}/albums/:albumId`}
          render={songList}
        />
      </section>
    </section>
  );
};

export default AlbumList;