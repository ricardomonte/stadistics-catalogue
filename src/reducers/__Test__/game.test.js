import gameReducer from '../game';
import * as actions from '../../actions/index';

test('gameReducer will update state and return it', () => {
  const firstState = [
    {
      game: 'a',
    },
  ];

  const newGame = [
    {
      game: 'c',
    },
  ];

  const action = actions.loadGamesSuccess(newGame);
  const newState = gameReducer(firstState, action);

  expect(newState.length).toEqual(1);
  expect(newState[0].game).toEqual('c');
  expect(newState[0].game).not.toEqual(firstState[0].game);
});
