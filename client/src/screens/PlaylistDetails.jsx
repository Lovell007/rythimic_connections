import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getOnePlaylist } from '../services/playlists';
import { BsThreeDots } from 'react-icons/bs';
import { IconContext } from 'react-icons/';
import Modal from '../components/Modal';
import PlaylistMenu from './PlaylistMenu';

export default function PlaylistDetails(props) {
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false)
  const { currentUser, handleDelete } = props
  const [playlist, setPlaylist] = useState(null);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const fetchPlaylist = async () => {
      const playlistData = await getOnePlaylist(id);
      setPlaylist(playlistData);
    };
    fetchPlaylist();
  }, [id]);

  return (
    <div>
      <div className='playlistRow'>
        <h3 className="playlistTitle">{playlist?.name}</h3>
        <IconContext.Provider value={{ size: 70 }}>
            <div>
              <BsThreeDots onClick={() => setModal(true)} />
            </div>
        </IconContext.Provider>
      </div>
      <Modal modal={modal} setModal={setModal}>
        <PlaylistMenu playlist={playlist} currentUser={currentUser}
          handleDelete={handleDelete}/>
      </Modal>
      {playlist?.songs.map(song => (
        <div className="songRows">
          <img className="rowSongImg" src={song.image_url} />
          <p className="rowSongName" key={song.id}>
            {song.name}
          </p>
          <IconContext.Provider value={{ size: 50 }}>
            <div>
              <BsThreeDots onClick={() => setModal(true)} />
            </div>
          </IconContext.Provider>
          {/* <Modal></Modal> */}
        </div>
      ))}
    </div>
  );
}
