import { combineReducers } from 'redux';
import { appReducer } from './app/reducer';

export const rootReducer = combineReducers({
  appState: appReducer,
});
