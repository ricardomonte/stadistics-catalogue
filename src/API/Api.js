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

export const getGamesImages = async () => {
  const urlGame = 'http://localhost:5000/games/images';
  try {
    const res = await axios.get(urlGame);
    return res.data;
  } catch (error) {
    return error;
  }
};

export const getGamesPlatforms = async () => {
  const urlGame = 'http://localhost:5000/games/platforms';
  try {
    const res = await axios.get(urlGame);
    return res.data;
  } catch (error) {
    return error;
  }
};
