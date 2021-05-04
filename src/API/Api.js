import axios from 'axios';

export const getGames = async () => {
  const url = 'https://www.mybaseapi.xyz/games/';
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    throw new Error(`${error.message}`);
  }
};

export const getGamesImages = async (id) => {
  const urlGame = `https://www.mybaseapi.xyz/games/${id}`;
  try {
    const res = await axios.get(urlGame);
    return await res.data[0];
  } catch (error) {
    throw new Error(`${error.message}`);
  }
};
