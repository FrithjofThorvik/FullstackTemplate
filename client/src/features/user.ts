import { createSlice } from "@reduxjs/toolkit";
import { RepeatState } from "../types/enums";
import { IUser } from "../types/interfaces";

// Set initial state
const initialState: IUser = {
	id: "",
	name: "",
	imageUrl: "",
	accessToken: "",
	playlist: null,
	playlists: [],
	queue: [],
	activeQueue: [],
	playerState: {
		progress: 50,
		duration: 138,
		trackName: "",
		artistName: "",
		imageUrl: "",
		isPlaying: false,
		isShuffle: false,
		repeatState: RepeatState.OFF,
		volume: 50,
	},
};

// Create user slice
export const userSlice = createSlice({
	name: "user",
	initialState: { value: initialState },
	reducers: {
		setId: (state, action) => {
			state.value = { ...state.value, id: action.payload.id };
		},
		setName: (state, action) => {
			state.value = { ...state.value, name: action.payload.name };
		},
		setImageUrl: (state, action) => {
			state.value = { ...state.value, imageUrl: action.payload.imageUrl };
		},
		setAccessToken: (state, action) => {
			state.value = { ...state.value, accessToken: action.payload.accessToken };
		},
		setPlaylist: (state, action) => {
			state.value = { ...state.value, playlist: action.payload.playlist };
		},
		setPlaylists: (state, action) => {
			state.value = { ...state.value, playlists: action.payload.playlists };
		},
		setPlayerState: (state, action) => {
			state.value = { ...state.value, playerState: action.payload.playerState };
		},
		setQueue: (state, action) => {
			state.value = { ...state.value, queue: action.payload.queue };
		},
		setActiveQueue: (state, action) => {
			state.value = { ...state.value, activeQueue: action.payload.activeQueue };
		},
	},
});

// Export actions
export const {
	setId,
	setName,
	setImageUrl,
	setAccessToken,
	setPlaylist,
	setPlaylists,
	setPlayerState,
	setQueue,
	setActiveQueue,
} = userSlice.actions;

// Export user reducer
export default userSlice.reducer;
