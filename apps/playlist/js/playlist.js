import { PLAYLISTS_API_URL } from './api';
import axios from 'axios';

export async function fetchPlaylists() {
  try {
    const response = await axios.get(PLAYLISTS_API_URL);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function createPlaylist(playlistName) {
  try {
    await axios.post(PLAYLISTS_API_URL, { name: playlistName });
  } catch (error) {
    console.error(error);
  }
}

export async function deletePlaylist(playlistId) {
  try {
    await axios.delete(`${PLAYLISTS_API_URL}${playlistId}/`);
  } catch (error) {
    console.error(error);
  }
}