import {
  RECEIVE_GAMES
} from '../constants';

const initialState = {
  games: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case RECEIVE_GAMES:
      return Object.assign({}, state, {
        games: state.games.concat(action.games)
      });
    default:
      return state;
  }
}
