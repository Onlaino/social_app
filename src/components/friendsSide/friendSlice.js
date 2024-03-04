import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	friends: [],
	loading: 'idle',
};

const friendsSlice = createSlice({
	name: 'friends',
	initialState,
	reducers: {
		friendsLoading(state, action) {
			if (state.loading === 'idle') {
				state.loading = 'pending';
			}
		},
		friendsReceived(state, action) {
			if (state.loading === 'pendind') {
				state.loading = 'idle';
				state.friends = action.payload;
			}
		},
	},
});

export const { friendsLoading, friendsReceived } = friendsSlice.actions;
export default friendsSlice.reducer;

// const fetchFriends = () => async (dispatch) => {
// 	dispatch(friendsLoading());
// 	const response = await
// }
