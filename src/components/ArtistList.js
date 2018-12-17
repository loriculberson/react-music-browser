import React from 'react';
import { Route, NavLink } from 'react-router-dom';

const ArtistList = ({match, artists}) => {
  console.log(artists)
  const list = artists.map(artist => 
    <li key={artist.id}><NavLink to={`${match.path}/${artist.id}`}>{artist.name}</NavLink></li>
  )

  return (
    <ul>
      {list}
    </ul>
  );
};

export default ArtistList;