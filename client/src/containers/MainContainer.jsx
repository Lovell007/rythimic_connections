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
  const { currentUser, playlistList } = props;
  const [userPlaylists, setUserPlaylists] = useState([])

  useEffect(() => {
    const fetchSongs = async () => {
      const SongData = await getAllSongs();
      setSongList(SongData);
      setUserPlaylists(playlistList)
      console.log(userPlaylists);
    };
    fetchSongs();
  }, []);

  	const handleCreate = async (formData) => {
  		const playlistData = await postPlaylist(formData);
  		setUserPlaylists((prevState) => [...prevState, playlistData]);
  		history.push('/playlists');
    };
  
    const handleDelete = async (id) => {
      await deletePlaylist(id);
      setUserPlaylists((prevState) => prevState.filter((playlist) => playlist.id !== id));
    };

  // 	const handleUpdate = async (id, formData) => {
  // 		const playlistData = await putPlaylist(id, formData);
  // 		setallPlaylists((prevState) =>
  // 			prevState.map((playlist) => {
  // 				return playlist.id === Number(id) ? playlistData : playlist;
  // 			})
  // 		);
  // 		history.push('/playlists');
  // 	};


  return (
    <Switch>
      <Route path="/home">
        <Home currentUser={currentUser} userPlaylists={userPlaylists} handleCreate={handleCreate}/>
      </Route>
      {/* // 			<Route path='/Songs'>
// 				<Songs SongList={SongList} />
// 			</Route> */}
      <Route path="/playlists/:id">
        <PlaylistDetails currentUser={currentUser}
          handleDelete={handleDelete}/>
      </Route>
    </Switch>
  );
}
