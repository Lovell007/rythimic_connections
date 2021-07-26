import { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import MainContainer from './containers/MainContainer';
import Layout from './layouts/Layout';
import Register from './screens/Register';
import { getAllPlaylists, deletePlaylist } from './services/playlists';
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth';

function App() {
  const [allPlaylists, setallPlaylists] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    const fetchPlaylists = async () => {
      const playlistData = await getAllPlaylists();
      setallPlaylists(playlistData);
    };
    fetchPlaylists();
    handleVerify();
  }, []);
  
  const handleDelete = async (id) => {
    await deletePlaylist(id);
    setallPlaylists((prevState) => prevState.filter((playlist) => playlist.id !== id));
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
  
    const userPlaylists = allPlaylists?.filter(playlist => {
      return playlist.userid === currentUser?.user_id;
    });
  
  return (
    <div className="App">
      <Layout userPlaylists={userPlaylists}
        currentUser={currentUser}
        handleLogin={handleLogin}
        handleLogout={handleLogout}>
        <Switch>
          <Route path="/register">
            <Register handleRegister={handleRegister} />
          </Route>
          <Route path="/">
            <MainContainer userPlaylists={userPlaylists} currentUser={currentUser}
              handleDelete={handleDelete}/>
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
