import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../components/Modal';
import Login from '../screens/Login';
import Register from '../screens/Register';
import PlaylistCreate from '../screens/PlaylistCreate';
import Playlists from '../screens/Playlists';

export default function Layout(props) {
  const { currentUser, handleLogin, userPlaylists, handleLogout } = props;

  const [modal, setModal] = useState(false);

  return (
    <div>
      <header>
        {currentUser ? (
          <>
            <div className="username" onClick={() => setModal(true)}>
              {currentUser.username}
            </div>
            <Modal modal={modal} setModal={setModal} className="create">
              <Playlists userPlaylists={userPlaylists}
                currentUser={currentUser}
                handleLogout={handleLogout}/>
            </Modal>
          </>
        ) : (
          <>
            <div className="header" onClick={() => setModal(true)}>
              Sign In
            </div>
            <Modal modal={modal} setModal={setModal}>
              <Login handleLogin={handleLogin} />
            </Modal>
          </>
        )}
      </header>
      {props.children}
    </div>
  );
}
