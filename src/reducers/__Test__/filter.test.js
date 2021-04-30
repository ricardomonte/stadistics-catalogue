import filterReducer from '../filter';
import * as actions from '../../actions/index';

test('should replace games', () => {
  const firstState = 'a';
  const newGame = 'b';
  const action = actions.filterGame(newGame);
  const newState = filterReducer(firstState, action);

  expect(newState.filter).toEqual('b');
  expect(newState.filter).not.toEqual(firstState.filter);
});
