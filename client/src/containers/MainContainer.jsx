import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import Home from '../screens/Home';
import PlaylistDetails from '../screens/PlaylistDetails';

import { postPlaylist, putPlaylist, deletePlaylist } from '../services/playlists';
import { getAllSongs } from '../services/songs';
// import Songs from '../screens/Songs';
// import Playlists from '../screens/Playlists';
// import PlaylistCreate from '../screens/PlaylistCreate';
// import PlaylistEdit from '../screens/PlaylistEdit';

export default function MainContainer(props) {
  const [SongList, setSongList] = useState([]);
  const history = useHistory();
  const { currentUser, userPlaylists } = props;

  useEffect(() => {
    const fetchSongs = async () => {
      const SongData = await getAllSongs();
      setSongList(SongData);
    };
    fetchSongs();
  }, []);

  // 	const handleCreate = async (formData) => {
  // 		const playlistData = await postPlaylist(formData);
  // 		setallPlaylists((prevState) => [...prevState, playlistData]);
  // 		history.push('/playlists');
  // 	};

  // 	const handleUpdate = async (id, formData) => {
  // 		const playlistData = await putPlaylist(id, formData);
  // 		setallPlaylists((prevState) =>
  // 			prevState.map((playlist) => {
  // 				return playlist.id === Number(id) ? playlistData : playlist;
  // 			})
  // 		);
  // 		history.push('/playlists');
  // 	};

  // 	const handleDelete = async (id) => {
  // 		await deletePlaylist(id);
  // 		setallPlaylists((prevState) => prevState.filter((playlist) => playlist.id !== id));
  // 	};

  return (
    <Switch>
      <Route path="/home">
        <Home currentUser={currentUser} userPlaylists={userPlaylists} />
      </Route>
      {/* // 			<Route path='/Songs'>
// 				<Songs SongList={SongList} />
// 			</Route> */}
      <Route path="/playlists/:id">
        <PlaylistDetails />
      </Route>
    </Switch>
  );
}
