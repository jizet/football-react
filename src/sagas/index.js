import { takeLatest, all } from 'redux-saga/effects'
import API from '../services/Api'

/* ------------- Types ------------- */

import { MatchesTypes } from '../redux/MatchesRedux'

/* ------------- Sagas ------------- */

import { getMatches } from './MatchesSagas'

/* ------------- API ------------- */
const api = API.create()

export default function * root () {
  yield all([
    takeLatest(MatchesTypes.GET_MATCHES_REQUEST, getMatches, api)
  ])
}