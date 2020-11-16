import { ThunkAction } from 'redux-thunk';
import API from './../API/API';
import { stateType, userType } from '../types/types';

const 	GET_USERS = 'users/GET_USERS';

interface getUsersTypeActionType {
	type: typeof GET_USERS
	payload: userType[]
}

const initialState: stateType = {
	users: [],
};

const usersReducer = (state = initialState, action: getUsersTypeActionType): stateType => {
	switch (action.type) {
		case GET_USERS:
			return {
				...state,
				users: [...action.payload]
			}
		default:
			return state;
	}
};

export default usersReducer;

export const getUsers = (payload: userType[] ): getUsersTypeActionType => ({ type: GET_USERS, payload });

export const requestUsers = (): ThunkAction<void, stateType, unknown, getUsersTypeActionType> => {
	return async (dispatch) => {
		let response = await API.getUsers()
		dispatch(getUsers(response));
	}
};