import React from 'react';

export default function PlaylistMenu(props) {
  const { playlist, currentUser, handleDelete, toggleEdit } = props;

  return (
    <div>
      <p>{playlist.name}</p>
      <p>{currentUser.username}</p>
      <div>
        <p>Play Playlist</p>
        <p onClick={() => handleDelete(playlist.id)}>Delete Playlist</p>
        <p>Shuffle Playlist</p>
        <p onClick={toggleEdit}>Edit Playlist</p>
      </div>
    </div>
  );
}
