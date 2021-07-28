import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getOnePlaylist } from '../services/playlists';
import { BsThreeDots } from 'react-icons/bs';
import { IconContext } from 'react-icons/';
import Modal from '../components/Modal';
import PlaylistMenu from './PlaylistMenu';
import SongMenu from './SongMenu';
import PlaylistEdit from './PlaylistEdit';

export default function PlaylistDetails(props) {
  const [isEdit, setIsEdit] = useState(false);
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const { currentUser, handleDelete, handleUpdate } = props;
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

  const toggleEdit = () => {
    setIsEdit(prevState => !prevState);
  };

  const handlePlaylistState = async (id, formData) => {
    const playlistData = await handleUpdate(id, formData);
    setPlaylist(prevState => ({
      ...prevState,
      ...playlistData,
    }));
    setIsEdit(false);
  };
  // Request URL: https://cdn.pixabay.com/audio/2021/07/26/audio_c8102c4eae.mp3

  let audio = new Audio('https://cdn.pixabay.com/audio/2021/07/26/audio_c8102c4eae.mp3');

  const start = () => {
    audio.play();
  };

  return (
    <div>
      <div className="playlistRow">
        {isEdit ? (
          <PlaylistEdit playlist={playlist} handlePlaylistState={handlePlaylistState} />
        ) : (
          <h3 className="playlistTitle">{playlist?.name}</h3>
        )}
        <IconContext.Provider value={{ size: 80 }}>
          <div className="PLdots">
            <BsThreeDots onClick={() => setModal(true)} />
          </div>
        </IconContext.Provider>
      </div>
      <Modal modal={modal} setModal={setModal}>
        <PlaylistMenu
          toggleEdit={toggleEdit}
          playlist={playlist}
          currentUser={currentUser}
          handleDelete={handleDelete}
        />
      </Modal>
      {playlist?.songs.map(song => (
        <div className="songRows">
          <img className="rowSongImg" src={song.image_url} />
          <p className="rowSongName" key={song.id}>
            {song.name}
          </p>
          <div>
            <button onClick={start}>Play</button>
          </div>
          <IconContext.Provider value={{ size: 50 }}>
            <div className="dots">
              <BsThreeDots onClick={() => setModal2(song)} />
            </div>
          </IconContext.Provider>
        </div>
      ))}
      <Modal modal={modal2} setModal={setModal2}>
        <SongMenu song={modal2} />
      </Modal>
    </div>
  );
}
