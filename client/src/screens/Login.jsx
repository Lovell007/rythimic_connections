import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login(props) {
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
      <h3>Login</h3>
      <input type="text" name="username" value={username} onChange={handleChange} />
      <br />
      <input type="password" name="password" value={password} onChange={handleChange} />
      <br />
      <Link to="/register">Create an Account</Link>
      <button>Submit</button>
    </form>
  );
}
