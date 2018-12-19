import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import AlbumList from './AlbumList';

const ArtistList = ({ match, artists}) => {
  const list = artists.map(artist => 
      artist.id ? 
      <li key={artist.id}>
        <NavLink to={`${match.path}/${artist.id}`}>{artist.name}</NavLink>
      </li> :
      <h2>Loading...</h2>
  )

  const processAlbum = (props) => {
    console.log(`props`, props)
    console.log(`artists`, artists)
    const artist = artists.find(artist => artist.id === Number(props.match.params.id))
    return (
      artist ?
        <AlbumList {...props} artist={artist} albums={artist.albums}/> : 
        <h2>Loading...</h2>
    );
  }
  
  return (
    <section>
      <ul>
        {list}
      </ul>
      <section>
        <Route
          path='/artists/:id'
          render={processAlbum}
        />
      </section>
    </section>
  );
};

export default ArtistList;