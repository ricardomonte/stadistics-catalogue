import axios from 'axios';

export const getGames = async () => {
  const url = 'http://localhost:5000/games';
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    return error;
  }
};

export const getGamesImages = async (id) => {
  const urlGame = `http://localhost:5000/games/${id}`;
  try {
    const res = await axios.get(urlGame);
    return await res.data[0];
  } catch (error) {
    return error;
  }
};
