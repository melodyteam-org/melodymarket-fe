import { SONGS_API_URL } from './api';
import axios from 'axios';

export async function fetchSongs() {
  try {
    const response = await axios.get(SONGS_API_URL);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function addToPlaylist(songId, playlistId) {
  try {
    await axios.post(`${SONGS_API_URL}${songId}/add_to_playlist/`, { playlist_id: playlistId });
  } catch (error) {
    console.error(error);
  }
}

export async function removeFromPlaylist(songId, playlistId) {
  try {
    await axios.post(`${SONGS_API_URL}${songId}/remove_from_playlist/`, { playlist_id: playlistId });
  } catch (error) {
    console.error(error);
  }
}