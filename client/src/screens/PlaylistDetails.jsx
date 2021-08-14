import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getOnePlaylist } from '../services/playlists';
import { BsThreeDots } from 'react-icons/bs';
import { IconContext } from 'react-icons/';
import Modal from '../components/Modal';
import PlaylistMenu from './PlaylistMenu';
import SongMenu from './SongMenu';
import PlaylistEdit from './PlaylistEdit';
import { AiFillPlayCircle } from 'react-icons/ai';
import { AiFillPauseCircle } from 'react-icons/ai';

export default function PlaylistDetails(props) {
  const [isEdit, setIsEdit] = useState(false);
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const { currentUser, handleDelete, handleUpdate, isLoaded, setIsLoaded, audioPlaylist } = props;
  const [playlist, setPlaylist] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchPlaylist = async () => {
      const playlistData = await getOnePlaylist(id);
      setPlaylist(playlistData);
    };
    fetchPlaylist();
  }, [id, isLoaded]);

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
  console.log(playlist?.songs);

  return (
    <div>
      <div>
        {isEdit ? (
          <PlaylistEdit playlist={playlist} handlePlaylistState={handlePlaylistState} />
        ) : (
          <div className="playlistRow">
            <h3 className="playlistTitle">{playlist?.name}</h3>
            <IconContext.Provider value={{ size: 80 }}>
              <div className="PLdots">
                <BsThreeDots onClick={() => setModal(true)} />
              </div>
            </IconContext.Provider>
          </div>
        )}
      </div>
      <Modal modal={modal} setModal={setModal}>
        <PlaylistMenu
          toggleEdit={toggleEdit}
          playlist={playlist}
          currentUser={currentUser}
          handleDelete={handleDelete}
          audioPlaylist={audioPlaylist}
        />
      </Modal>
      {playlist?.songs.map(song => {
        const audio = new Audio(song.audio_url);
        return (
          <div className="songRows">
            <div className="audioBtns">
              <IconContext.Provider value={{ size: 50 }}>
                <AiFillPlayCircle onClick={() => audio.play()} />
                <AiFillPauseCircle onClick={() => audio.pause()} />
              </IconContext.Provider>
            </div>
            <img className="rowSongImg" src={song.image_url} />
            <p className="rowSongName" key={song.id}>
              {song.name}
            </p>
            <IconContext.Provider value={{ size: 50 }}>
              <div className="dots">
                <BsThreeDots onClick={() => setModal2(song)} />
              </div>
            </IconContext.Provider>
          </div>
        );
      })}
      <Modal modal={modal2} setModal={setModal2}>
        <SongMenu song={modal2} />
      </Modal>
      {/* {playlist && <AudioPlayer playlist={playlist} />} */}
    </div>
  );
}
