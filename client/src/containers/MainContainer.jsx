import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import Home from '../screens/Home';
import PlaylistDetails from '../screens/PlaylistDetails';
import { getAllSongs } from '../services/songs';

export default function MainContainer(props) {
  const [SongList, setSongList] = useState([]);
  const history = useHistory();
  const {
    currentUser,
    userPlaylists,
    handleDelete,
    handleCreate,
    handleUpdate,
    isLoaded,
    setIsLoaded,
    audioPlaylist,
  } = props;

  useEffect(() => {
    const fetchSongs = async () => {
      const SongData = await getAllSongs();
      setSongList(SongData);
    };
    fetchSongs();
  }, []);

  return (
    <Switch>
      <Route path="/home">
        <Home
          currentUser={currentUser}
          userPlaylists={userPlaylists}
          handleCreate={handleCreate}
          isLoaded={isLoaded}
          setIsLoaded={setIsLoaded}
        />
      </Route>
      <Route path="/playlists/:id">
        <PlaylistDetails
          currentUser={currentUser}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
          isLoaded={isLoaded}
          setIsLoaded={setIsLoaded}
          audioPlaylist={audioPlaylist}
        />
      </Route>
    </Switch>
  );
}
