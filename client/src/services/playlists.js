import api from './apiconfig';

export const getAllPlaylists = async () => {
	const resp = await api.get('/playlists');
	return resp.data;
};

export const getOnePlaylist = async (id) => {
	const resp = await api.get(`/playlists/${id}`);
	return resp.data;
};

export const postPlaylist = async (playlistData) => {
	const resp = await api.post('/playlists', { playlist: playlistData });
	return resp.data;
};

export const putPlaylist = async (id, playlistData) => {
	const resp = await api.put(`/playlists/${id}`, { playlist: playlistData });
	return resp.data;
};

export const deletePlaylist = async (id) => {
	const resp = await api.delete(`/playlists/${id}`);
	return resp;
};

export const addSong = async (songId, playlistId) => {
	const resp = await api.put(`/songs/${songId}/playlists/${playlistId}`);
	return resp.data;
};
