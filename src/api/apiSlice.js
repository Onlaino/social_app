import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const friendsApi = createApi({
	reducerPath: 'friendsApi',
	baseQuery: fetchBaseQuery({
		baseUrl:
			'https://65e2f8ef88c4088649f51c74.mockapi.io/social_app/',
	}),
	endpoints: builder => ({
		getFriends: builder.query({
			query: () => 'friends/friends',
		}),
	}),
});

export const { useGetFriendsQuery } = friendsApi;
