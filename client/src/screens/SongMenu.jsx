import React from 'react';

export default function SongMenu(props) {
  const { song } = props;

  return (
    <div>
      <p className="SMname">{song.name}</p>
      <div className="menu">
        <p>Remove Song</p>
        <p>Add to Playlist</p>
        <p>Go to Artist</p>
        <p>Go to Album</p>
      </div>
    </div>
  );
}
