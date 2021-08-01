import { useState } from 'react';

export default function Register(props) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const { username, password } = formData;
  const { handleRegister } = props;

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
        handleRegister(formData);
      }}
    >
      <h3 className="login">Register</h3>
      <input
        type="text"
        name="username"
        className="loginUser"
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
      <button className="Btn" className="register">
        Register
      </button>
    </form>
  );
}
