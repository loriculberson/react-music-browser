import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import AlbumList from './AlbumList';

const ArtistList = ({ match, artists}) => {
  console.log(`artistList match`, match)
  const list = artists.map(artist => 
      artist.id ? 
      <li key={artist.id}>
        <NavLink to={`${match.path}/${artist.id}`}>{artist.name}</NavLink>
      </li> :
      <h2>Loading...</h2>
  )

  const processAlbum = (props) => {
    console.log(`process props.match`, props.match)
    // console.log(`artists`, artists)
    const artist = artists.find(artist => artist.id === Number(props.match.params.id))
    return (
      artist ?
        <AlbumList {...props} artist={artist} albums={artist.albums}/> : 
        <h2>Loading...</h2>
    );
  }
  
  return (
    <main>
      <section className="artists">
        <h4>Artists</h4>
        <ul>
          {list}
        </ul>
      </section>
      <Route
        path='/artists/:id'
        render={processAlbum}
      />

    </main>
  );
};

export default ArtistList;