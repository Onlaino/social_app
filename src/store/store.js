import { configureStore } from '@reduxjs/toolkit';
import { friendsApi } from '../api/apiSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import userReduser from './slices/userSlice';

export const store = configureStore({
	reducer: {
		user: userReduser,
		[friendsApi.reducerPath]: friendsApi.reducer,
	},
	middleware: getDefaultMiddleware => {
		return getDefaultMiddleware().concat(friendsApi.middleware);
	},
});

setupListeners(store.dispatch);
