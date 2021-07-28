import React, { useEffect, useState } from 'react';

export default function PlaylistEdit(props) {
  const [formData, setFormData] = useState({
    name: '',
  });
  const { handlePlaylistState, playlist } = props;

  useEffect(() => {
    setFormData({ name: playlist.name });
  }, [playlist.name]);

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
        handlePlaylistState(playlist.id, formData);
      }}
    >
      <input name="name" type="text" value={formData.name} onChange={handleChange} />
      <button className="saveBtn">Save</button>
    </form>
  );
}
