import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import catalogReducer from './redux/catalogReducer';

const store = configureStore({
  reducer: {
    catalog: catalogReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export default store