import React from 'react';

export default function Playlists(props) {
  const { currentUser, userPlaylists, handleLogout } = props;

  return (
    <div>
      <div className="profileName">{currentUser.username}</div>
      {userPlaylists.map(playlist => (
        <div className="proPLname">{playlist.name}</div>
      ))}
      <div className='signout' onClick={handleLogout}>Signout</div>
    </div>
  );
}
