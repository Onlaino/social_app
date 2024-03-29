import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	email: null,
	token: null,
	id: null,
	name: null,
	surname: null,
	avatarLink: null,
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser(state, action) {
			state.email = action.payload.email;
			state.token = action.payload.token;
			state.id = action.payload.id;
			state.surname = action.payload.surname;
			state.name = action.payload.name;
			state.avatarLink = action.payload.avatarLink;
			state.gallery = action.payload.gallery;
		},
		removeUser(state) {
			state.email = null;
			state.token = null;
			state.id = null;
			state.name = null;
			state.surname = null;
			state.avatarLink = null;
			state.gallery = null;
		},
	},
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
