import api from './apiconfig';

export const getAllSongs = async () => {
	const resp = await api.get('/songs');
	return resp.data;
};
