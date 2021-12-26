import {createReducer} from "../store.config";
import actionTypes from "../types/"

export const initialState = {
	loading: false,
	data: [],
	error: null,
}

export const handler = {
	[actionTypes.GET_POST_REQUEST]: (state, action) => ({
		...state,
		loading: true,
	}),
	[actionTypes.GET_POST_SUCCESS]: (state, action) => ({
		...state,
		loading: false,
		data: action.payload,
	}),
	[actionTypes.GET_POST_FAILURE]: (state, action) => ({
		...state,
		loading: false,
		error: action.payload,
	}),
}

export const userReducer = createReducer(initialState, handler)

