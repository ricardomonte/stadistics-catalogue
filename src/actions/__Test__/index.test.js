import * as types from '../actionTypes';
import MockData from '../../../tools/MockData';
import * as actionCreator from '../index';

test('Load games success', () => {
  const expectedAction = {
    type: types.LOAD_GAMES_SUCCESS,
    payload: MockData,
  };

  const action = actionCreator.loadGamesSuccess(MockData);
  expect(action).toEqual(expectedAction);
});

test('Load screenshots success', () => {
  const expectedAction = {
    type: types.LOAD_IMAGES_SUCCESS,
    payload: MockData[0],
  };

  const action = actionCreator.loadScreenshotsSuccess(MockData[0]);
  expect(action).toEqual(expectedAction);
});

test('Load filter success success', () => {
  const expectedAction = {
    type: types.FILTER_GAME,
    payload: MockData[0].genre,
  };

  const action = actionCreator.filterGame(MockData[0].genre);
  expect(action).toEqual(expectedAction);
});
