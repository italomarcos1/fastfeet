import { all, call, takeLatest } from 'redux-saga/effects';

import api from '~/services/api';

export function* signIn({ payload }) {
  const { email, password } = payload;

  const response = yield call(api.post, 'login', { email, password });

  console.tron.log(response.data);
}

export default all([takeLatest('@nothing', signIn)]);
