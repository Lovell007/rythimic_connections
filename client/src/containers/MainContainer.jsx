import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import Home from '../screens/Home';

import { getAllPlaylists, postPlaylist, putPlaylist, deletePlaylist } from '../services/playlists';
import { getAllSongs } from '../services/songs';
// import Songs from '../screens/Songs';
// import Playlists from '../screens/Playlists';
// import PlaylistCreate from '../screens/PlaylistCreate';
// import PlaylistEdit from '../screens/PlaylistEdit';
// import PlaylistDetail from '../screens/PlaylistDetail';

export default function MainContainer(props) {
	const [allPlaylists, setallPlaylists] = useState([]);
	const [SongList, setSongList] = useState([]);
  const history = useHistory();
  const {currentUser} = props

	useEffect(() => {
		const fetchPlaylists = async () => {
			const playlistData = await getAllPlaylists();
			setallPlaylists(playlistData);
		};
		const fetchSongs = async () => {
			const SongData = await getAllSongs();
			setSongList(SongData);
		};
		fetchPlaylists();
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
  
  const userPlaylists = allPlaylists?.filter((playlist) => {
    return playlist.user_id === currentUser.id
  })

  return (
    <Switch>
      <Route path='/home'>
        <Home currentUser={currentUser} userPlaylists={userPlaylists}/>
      </Route>
{/* // 			<Route path='/Songs'>
// 				<Songs SongList={SongList} />
// 			</Route> */}
{/* // 			<Route path='/playlists/:id/edit'>
// 				<PlaylistEdit allPlaylists={allPlaylists} handleUpdate={handleUpdate} />
// 			</Route> */}
{/* // 			<Route path='/playlists/new'>
// 				<PlaylistCreate handleCreate={handleCreate} />
// 			</Route> */}
			<Route path='/playlists/:id'>
        {/* <PlaylistDetail SongList={SongList} /> */}
        <h3>Details, baby!</h3>
			</Route>
{/* // 			<Route path='/playlists'>
// 				<Playlists allPlaylists={allPlaylists} handleDelete={handleDelete} />
// 			</Route> */}
		</Switch>
	);
}
