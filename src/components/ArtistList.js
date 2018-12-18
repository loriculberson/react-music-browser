import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import AlbumList from './AlbumList';

const ArtistList = ({ match, artists}) => {
  const list = artists.map(artist => 
    <li key={artist.id}>
      <NavLink to={`${match.path}/${artist.id}`}>{artist.name}</NavLink>
    </li>
  )

  return (
    <section>
      <ul>
        {list}
      </ul>
      <section>
        <Route path='/artists/:id' render={(props) => <AlbumList {...props} artists={artists}/>} />
      </section>
    </section>
  );
};

export default ArtistList;