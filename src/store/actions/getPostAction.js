import actionTypes from "../types/";
import {callAction} from "../store.config";
import axios from "axios"

export const getPost = () => async dispatch => {
	callAction(dispatch, actionTypes.GET_POST_REQUEST)
	try {
		const response = await axios.get(`your api`)
		callAction(dispatch, actionTypes.GET_POST_SUCCESS, response.data)
	} catch (error) {
		callAction(dispatch, actionTypes.GET_POST_FAILURE, error)
	}
}