import axios from 'axios';

export const getGames = async () => {
  const url = 'http://www.mybaseapi.xyz/games';
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    return error;
  }
};

export const getGamesImages = async (id) => {
  const urlGame = `http://www.mybaseapi.xyz/games/${id}`;
  try {
    const res = await axios.get(urlGame);
    return await res.data[0];
  } catch (error) {
    return error;
  }
};
