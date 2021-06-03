import axios from 'axios';

export const getGames = async () => {
  const url = 'https://express-igdb.herokuapp.com/games/';
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    throw new Error(`${error.message}`);
  }
};

export const getGamesImages = async (id) => {
  const urlGame = `https://express-igdb.herokuapp.com/games/${id}`;
  try {
    const res = await axios.get(urlGame);
    return await res.data[0];
  } catch (error) {
    throw new Error(`${error.message}`);
  }
};
