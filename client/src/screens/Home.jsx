import React from 'react'
import '../assets/css/Home.css'
import Layout from '../layouts/Layout'
import headerImage from '../assets/images/Music.png'
import Modal from '../components/Modal'
import Login from './Login'

export default function Home(props) {
  const { currentUser } = props
  return (
    <div>
      {/* <Layout> */}
        <img className="homeImg" src={headerImage}/>
        <Modal>
          <Login />
        </Modal>
        {currentUser ? (
          <div className='cyop'>
            Create Your Own Playlist
          </div>
        ) : (
          <>
            <div className='cyop'>
              Create Your Own Playlist
            </div>
              {currentUser?.playlists.map(playlist => {
                return <div>{playlist.name}</div>
              })}
          </>
        )}
      {/* </Layout> */}
      
    </div>
  )
}


