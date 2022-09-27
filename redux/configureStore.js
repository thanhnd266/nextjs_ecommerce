import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
import authSlice from './AuthSlice';
import notifySlice from './NotifySlice';

const reducer = combineReducers({
    auth: authSlice,
    notify: notifySlice,
});

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }),
});

export default store;