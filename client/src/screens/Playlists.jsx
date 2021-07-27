import React from 'react';
import { Link } from 'react-router-dom';

export default function Playlists(props) {
  const { currentUser, userPlaylists, handleLogout } = props;
  console.log(userPlaylists);
  return (
    <div>
      <div className="profileName">{currentUser.username}</div>
      {userPlaylists.map(playlist => (
        <Link to={`/playlists/${playlist.id}`}>
          <div className="proPLname">{playlist.name}</div>
        </Link>
      ))}
      <div className='signout' onClick={handleLogout}>Signout</div>
    </div>
  );
}
