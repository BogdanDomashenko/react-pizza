import { ROLES } from "../../utils/constants";

const initialState = {
	role: ROLES.phantom,
	data: {},
	orders: {
		list: [],
		totalCount: 0,
	},
	authError: null,
};

const user = (state = initialState, action) => {
	switch (action.type) {
		case "SET_USER_DATA":
			return {
				...state,
				data: action.payload,
			};
		case "SET_AUTH_ERROR":
			return {
				...state,
				authError: action.payload,
			};
		case "SET_USER_ROLE": {
			return {
				...state,
				role: action.payload,
			};
		}
		case "SET_ORDERS": {
			return {
				...state,
				orders: action.payload,
			};
		}
		case "RESET_USER": {
			return initialState;
		}
		default:
			return state;
	}
};

export default user;
