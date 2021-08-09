import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "ADD_USER_GAME" action

function* addUserGame(action) {
  try {
  //  yield axios.post('/api/usergame', action.payload); which is correct?
      yield call(axios.post, '/api/usergame', action.payload);
      // yield put({ type: 'FETCH_USER_GAME'})
  } catch (error) {
    console.log('Failed to add user game time.', error);
  }
}

function* fetchUsers(action) {
  try {
      const userGame = yield axios.get('/api/usergame', action.payload);
      yield put({ type: 'SET_USER_GAME', payload: userGame.data});
      console.log(action.payload);
      console.log('inside fetchUsers Saga', action);
  } catch (error) {
      console.log('unable to retrieve user game from fetchUser:', error);
  }
}

function* userGameSaga() {
  yield takeLatest('ADD_USER_GAME', addUserGame);
  yield takeLatest('FETCH_USERS', fetchUsers);
}

export default userGameSaga;