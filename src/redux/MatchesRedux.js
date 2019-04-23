import { createReducer, createActions } from 'reduxsauce'


/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  getMatchesRequest: [],
  getMatchesSuccess: ['result'],
  getMatchesFailure: ['error'],
}, { prefix: 'MATCHES_'})

export const MatchesTypes = Types
export default Creators

/* ------------- Initial State ------------- */
export const INITIAL_STATE = {
  matches: [],
  fetching: false,
  error: false
}

/* ------------- Reducers ------------- */

export const getMatchesRequest = (state) => ({
  ...state, fetching: true, error: false
})


export const getMatchesSuccess = (state, {result}) => ({
  ...state, fetching: false, matches: result
})

export const getMatchesFailure = (state, {error}) => ({
  ...state, fetching: false, error: error
})

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_MATCHES_SUCCESS]: getMatchesSuccess,
  [Types.GET_MATCHES_FAILURE]: getMatchesFailure,
  [Types.GET_MATCHES_REQUEST]: getMatchesRequest
})