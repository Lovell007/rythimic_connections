import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Home.css';
import headerImage from '../assets/images/Music.png';
import Modal from '../components/Modal';
import Login from './Login';
import PlaylistCreate from './PlaylistCreate';

export default function Home(props) {
  const { currentUser, userPlaylists, handleCreate } = props;
  const [modal, setModal] = useState(false);

  return (
    <div>
      <img className="homeImg" src={headerImage} />
      {!currentUser ? (
        <>
          <div className="cyop" onClick={() => setModal(true)}>
            Create Your Own Playlist!!!
          </div>
          <Modal modal={modal} setModal={setModal}>
            <Login />
          </Modal>
        </>
      ) : (
        <div>
          <p className="playlistsSecName">Playlists</p>
          <div className="homeList">
            <div className="cyop" onClick={() => setModal(true)}>
              Create Your Own Playlist
            </div>
            <Modal modal={modal} setModal={setModal}>
              <PlaylistCreate handleCreate={handleCreate} />
            </Modal>
            {userPlaylists.map(playlist => (
              <div key={playlist.id}>
                <Link to={`/playlists/${playlist.id}`}>
                  <div className="homePLimg">Place holder</div>
                  <p className="homeName">{playlist.name}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
