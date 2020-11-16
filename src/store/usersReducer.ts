import { ThunkAction } from 'redux-thunk';
import API from './../API/API';
import { stateType, userType } from '../types/types';

const 	GET_USERS = 'users/GET_USERS',
		SET_PAGE_NUMBER = 'users/SET_PAGE_NUMBER',
		TOGGLE_IS_LOADING = 'users/TOGGLE_IS_LOADING';

interface getUsersTypeActionType {
	type: typeof GET_USERS
	payload: userType[]
}
interface toggleIsLoadingActionType {
	type: typeof TOGGLE_IS_LOADING
}
type ActionsType = getUsersTypeActionType | toggleIsLoadingActionType

const initialState: stateType = {
	users: [],
	isLoading: false // show preloader
};

const usersReducer = (state = initialState, action: ActionsType): stateType => {
	switch (action.type) {
		case GET_USERS:
			return {
				...state,
				users: [...action.payload]
			}
		case TOGGLE_IS_LOADING:
			return {
				...state,
				isLoading: !state.isLoading
			}
		default:
			return state;
	}
};

export default usersReducer;

export const getUsers = (payload: userType[] ): getUsersTypeActionType => ({ type: GET_USERS, payload });
const toggleIsLoading = (): toggleIsLoadingActionType => ({ type: TOGGLE_IS_LOADING });

export const requestUsers = (): ThunkAction<void, stateType, unknown, ActionsType> => {
	return async (dispatch) => {
		dispatch(toggleIsLoading());
		let response = await API.getUsers()
		dispatch(getUsers(response));
		dispatch(toggleIsLoading());
	}
};