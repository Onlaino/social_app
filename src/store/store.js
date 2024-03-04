import { configureStore } from '@reduxjs/toolkit';
import { friendsApi } from '../api/apiSlice';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
	reducer: {
		[friendsApi.reducerPath]: friendsApi.reducer,
	},
	middleware: getDefaultMiddleware => {
		return getDefaultMiddleware().concat(friendsApi.middleware);
	},
});

setupListeners(store.dispatch);
