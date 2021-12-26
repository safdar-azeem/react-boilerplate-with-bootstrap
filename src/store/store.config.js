export const createReducer = (initialState, handler) => 
    (state = initialState, action) => handler.hasOwnProperty(action.type) ? handler[action.type](state, action) : state

export const createAction = (type, payload) => ({ type: type, payload: payload })

export const callAction = (dispatch, type, payload) => {
	dispatch(createAction(type, payload))
}
