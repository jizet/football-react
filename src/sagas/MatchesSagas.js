import "regenerator-runtime/runtime";
import { call, put } from 'redux-saga/effects'
import MatchesActions from '../redux/MatchesRedux'

export function * getMatches (api) {
  const response = yield call(api.getMatches)

  if (response.ok) {
    if (response.data.value.length > 1) {
      return yield put(MatchesActions.getMatchesSuccess(response.data.value))
    }
  }

  return yield put(MatchesActions.getMatchesFailure(response.data))
}