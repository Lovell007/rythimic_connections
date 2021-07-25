import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/Home.css'
import headerImage from '../assets/images/Music.png'
import Modal from '../components/Modal'
import Login from './Login'
import PlaylistCreate from './PlaylistCreate'

export default function Home(props) {
  const { currentUser, userPlaylists } = props
  const [modal, setModal] = useState(false);

  return (
    <div>
      <img className="homeImg" src={headerImage}/>
      {!currentUser ? (
        <>
        <div className='cyop' onClick={() => setModal(true)}>
          Create Your Own Playlist!!!
        </div>
        <Modal modal={modal} setModal={setModal}>
          <PlaylistCreate />
        </Modal>
        </>
      ) : (
        <>
        <div className='cyop' onClick={() => setModal(true)}>
          Create Your Own Playlist
        </div>
        <Modal modal={modal} setModal={setModal}>
          <PlaylistCreate />
        </Modal>
          {userPlaylists.map(playlist => (
            <div>
              <Link to='/playlist/:id'>
                {playlist.name}
              </Link>
            </div>
          ))}
        </>
      )}      
    </div>
  )
}


