import { useState } from 'react';

export default function PlaylistCreate(props) {
  const [formData, setFormData] = useState({
    name: '',
  });
  const { name } = formData;
  const { handleCreate } = props;

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
        handleCreate(formData);
      }}
    >
      <h3 className="newPlaylistTitle">New Playlist</h3>
      <input className="newPlaylist" type="text" name="name" value={name} onChange={handleChange} />
      <button className="Btn">Create</button>
    </form>
  );
}
