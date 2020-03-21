import { createStore } from 'redux';
import { rootReducer } from './combine';

export const configureStore = () => {
  return createStore(rootReducer);
};
