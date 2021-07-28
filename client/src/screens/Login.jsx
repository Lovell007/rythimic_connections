import { useState } from 'react';
import Modal from '../components/Modal';
import Register from './Register';

export default function Login(props) {
  const [modal, setModal] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const { username, password } = formData;
  const { handleLogin } = props;

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        handleLogin(formData);
      }}
    >
      <h3 className="login">Login</h3>
      <input
        className="loginUser"
        type="text"
        name="username"
        value={username}
        onChange={handleChange}
      />
      <br />
      <input
        type="password"
        name="password"
        className="password"
        value={password}
        onChange={handleChange}
      />
      <br />
      <button className="createAccount">Let's Jam</button>
      <Modal modal={modal} setModal={setModal}>
        <Register />
      </Modal>
    </form>
  );
}
