import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../sagas/'

export default () => {
  const rootReducer = combineReducers({
    matches: require('./MatchesRedux').reducer
  })

  return configureStore(rootReducer, rootSaga)
}