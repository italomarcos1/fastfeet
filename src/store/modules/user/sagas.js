import { all, call, takeLatest } from 'redux-saga/effects';

import api from '~/services/api';

export function* signIn({ payload }) {
  console.tron.log('sagas...');

  const { email, password } = payload;
  console.tron.log('dados...');

  console.tron.log('chamar api...');

  const response = yield call(api.post, 'login', { email, password });
  console.tron.log('chamou!');

  console.tron.log(response.data);
}

export default all([takeLatest('@nothing', signIn)]);
