import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
import authSlice from './AuthSlice';
import CartSlice from './CartSlice';
import notifySlice from './NotifySlice';

const reducer = combineReducers({
    auth: authSlice,
    notify: notifySlice,
    cart: CartSlice,
});

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }),
});

export default store;