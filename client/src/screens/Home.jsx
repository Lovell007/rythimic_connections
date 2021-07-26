import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/Home.css'
import headerImage from '../assets/images/Music.png'
import Modal from '../components/Modal'
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
        <Modal modal={modal} setModal={setModal} className='createModal'>
          <PlaylistCreate />
            </Modal>
            <div>
            {userPlaylists.map((playlist) => (
            <div key={playlist.id}>
                <Link to={`/playlists/${playlist.id}`}>
                <p>{playlist.name}</p>
                </Link>
            </div>
          ))}
        </div>
        </>
      )}      
    </div>
  )
}


