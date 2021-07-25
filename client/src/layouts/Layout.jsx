import React, {useState} from 'react'
import {Link} from 'react-router-dom' 
import Modal from '../components/Modal';
import Login from '../screens/Login'
import Register from '../screens/Register';

export default function Layout(props) {
  const { currentUser, handleLogin } = props;

  const [modal, setModal] = useState(false);

  
  // const toggleModal = () => {
  //   setModal(!modal);
  // };

  return (
    <div>
      <header>
        {currentUser ? (
          <>
					<div className='username' onClick={() => setModal(true)}>
						{currentUser.username}
            </div>
            <Modal modal={modal} setModal={setModal}>
              <h3>playlists</h3>
            </Modal>
            </>
        ) : (
            <>
            <div className='header' onClick={() => setModal(true)}>Sign In</div>
            <Modal modal={modal} setModal={setModal}>
                <Login handleLogin={handleLogin}/>
            </Modal>
           </>
				)}
        <hr />
      </header>
      {props.children}
    </div>
  )
}
