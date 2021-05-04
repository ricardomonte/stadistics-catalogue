import imagesReducer from '../images';
import * as actions from '../../actions/index';

test('imagesReducer will update state and return it', () => {
  const firstState = [
    {
      name: 'a',
      id: 123456,
    },
  ];
  const newGame = [
    {
      name: 'b',
      id: 987456,
    },
  ];
  const action = actions.loadScreenshotsSuccess(newGame);
  const newState = imagesReducer(firstState, action);

  expect(newState[0].name).toEqual('b');
  expect(newState[0].id).not.toEqual(firstState[0].id);
});
