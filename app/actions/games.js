import axios from 'axios';

import {
  RECEIVE_GAMES
} from '../constants';

export const getGames = () => {
  return dispatch => {
    return axios.get('http://localhost:3001/api/games')
    .then((res) => res.data)
    .then((games) => {
      dispatch({
        type: RECEIVE_GAMES,
        games
      });
    })
    .catch(err => console.error(err));
  };
};
