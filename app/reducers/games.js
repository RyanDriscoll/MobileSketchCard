import {
  RECEIVE_GAMES,
  RECEIVE_ROSTERS,
  SELECT_GAME
} from '../constants';

const initialState = {
  games: [],
  selectedGame: {},
  homeRoster: [],
  awayRoster: []
};

export default function (state = initialState, action) {
  switch (action.type) {

    case RECEIVE_GAMES:
      return Object.assign({}, state, {
        games: state.games.concat(action.games)
      });

    case RECEIVE_ROSTERS:
      return Object.assign({}, state, {
        homeRoster: state.homeRoster.concat(action.home),
        awayRoster: state.awayRoster.concat(action.away)
      });

    case SELECT_GAME:
    console.log('in reducer', action.game);
      return Object.assign({}, state, {
        selectedGame: Object.assign({}, action.game)
      });
    default:
      return state;
  }
}
