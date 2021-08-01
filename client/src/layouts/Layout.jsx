import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../components/Modal';
import Login from '../screens/Login';
import Playlists from '../screens/Playlists';
import homepage from '../assets/images/house-309113_640.png';

export default function Layout(props) {
  const { currentUser, handleLogin, userPlaylists, handleLogout } = props;
  const [modal, setModal] = useState(false);

  return (
    <div>
      <header>
        {currentUser ? (
          <>
            <div className="homepage">
              <Link to="/home">
                <img src={homepage} className="homeIcon" />
              </Link>
            </div>
            <div className="username" onClick={() => setModal(true)}>
              {currentUser.username}
            </div>
            <Modal modal={modal} setModal={setModal} className="create">
              <Playlists
                userPlaylists={userPlaylists}
                currentUser={currentUser}
                handleLogout={handleLogout}
              />
            </Modal>
          </>
        ) : (
          <>
            <Link to="/home">
              <img className="homepage" src={homepage} />
            </Link>
            <div className="username" onClick={() => setModal(true)}>
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
