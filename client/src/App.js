import { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import MainContainer from './containers/MainContainer';
import Layout from './layouts/Layout';
import Register from './screens/Register';
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth';
import { postPlaylist, putPlaylist, deletePlaylist, getAllPlaylists } from './services/playlists';

function App() {
  const [userPlaylists, setUserPlaylists] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false)
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handleVerify();
  }, []);

  useEffect(() => {
  const fetchPlaylists = async () => {
    const playlistData = await getAllPlaylists();
    setUserPlaylists(playlistData);
    console.log(userPlaylists);
  };
    if (currentUser) fetchPlaylists();
  }, [currentUser])


  const handleUpdate = async (id, formData) => {
    const playlistData = await putPlaylist(id, formData);
    setUserPlaylists((prevState) =>
      prevState.map((playlist) => {
        return playlist.id === Number(id) ? playlistData : playlist;
      })
    );
    return playlistData
  };

  const handleCreate = async (formData) => {
    const playlistData = await postPlaylist(formData);
    setUserPlaylists((prevState) => [...prevState, playlistData]);
    history.push('/home');
  };

  const handleDelete = async (id) => {
    await deletePlaylist(id);
    setUserPlaylists((prevState) => prevState.filter((playlist) => playlist.id !== id));
  };
  
  const handleLogin = async formData => {
    const userData = await loginUser(formData);
    setCurrentUser(userData);
    history.push('/home');
  };
  
  const handleRegister = async formData => {
    const userData = await registerUser(formData);
    setCurrentUser(userData);
    history.push('/home');
  };
  
  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
    history.push('/home');
  };
  
  return (
    <div className="App">
      <Layout userPlaylists={userPlaylists}
        currentUser={currentUser}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
        handleRegister={handleRegister}>
        <Switch>
          <Route path="/register">
            <Register handleRegister={handleRegister} />
          </Route>
          <Route path="/">
            <MainContainer userPlaylists={userPlaylists}
              currentUser={currentUser}
              handleCreate={handleCreate}
              handleDelete={handleDelete}
              handleUpdate={handleUpdate}
              isLoaded={isLoaded}
              setIsLoaded={setIsLoaded}/>
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
