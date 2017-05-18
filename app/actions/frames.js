export const receivePaths = (team, paths, x, y) => {
      return dispatch => {
      dispatch(setPaths(team, paths, x, y));
    };
  }
;