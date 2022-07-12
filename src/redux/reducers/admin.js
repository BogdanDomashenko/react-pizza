const initialState = {
	orders: {
		list: [],
		totalCount: 0,
	},
	pizzas: {
		list: [],
		totalCount: 0,
	},
	stockPizzas: {
		list: [],
		totalCount: 0,
	},
	pizzasSales: [],
	users: [],
	error: null,
};

const admin = (state = initialState, action) => {
	switch (action.type) {
		case "SET_ORDERS":
			return {
				...state,
				orders: action.payload,
			};
		case "RESET_ADMIN": {
			return initialState;
		}
		case "SET_ORDER_STATUS": {
			return {
				...state,
				orders: {
					...state,
					list: state.orders.list.map((order) =>
						order.id === action.payload.id
							? {...order, status: action.payload.status}
							: order
					),
				},
			};
		}
		case "SET_ADMIN_PIZZAS": {
			return {
				...state,
				pizzas: action.payload,
			};
		}
		case "SET_ADMIN_PIZZA_ITEM": {
			return {
				...state,
				pizzas: {
					...state.pizzas,
					list: state.pizzas.list.map((pizza) =>
						pizza.id === action.payload.id
							? {id: action.payload.id, ...action.payload.item}
							: pizza
					)
				},
			};
		}
		case "SET_ADMIN_ERROR": {
			return {
				...state,
				error: action.payload,
			};
		}
		case "SET_ADMIN_STOCK_PIZZAS": {
			return {
				...state,
				stockPizzas: action.payload,
			};
		}
		case "REMOVE_ADMIN_STOCK_PIZZA_SIZE": {
			return {
				...state,
				stockPizzas: {
					...state.stockPizzas,
					list: state.stockPizzas.list.map((pizza) =>
						action.payload.id === pizza.id
							? {
								...pizza,
								sizes: pizza.sizes.filter(
									(size) => size !== action.payload.size
								),
							}
							: pizza
					),
				},
			};
		}
		case "REMOVE_ADMIN_STOCK_PIZZA_TYPE": {
			return {
				...state,
				stockPizzas: {
					...state.stockPizzas,
					list: state.stockPizzas.list.map((pizza) =>
						action.payload.id === pizza.id
							? {
								...pizza,
								types: pizza.types.filter(
									(type) => type !== action.payload.type
								),
							}
							: pizza
					),
				},
			};
		}
		case "ADD_ADMIN_PIZZA_SIZE": {
			return {
				...state,
				stockPizzas: {
					...state.stockPizzas,
					list: state.stockPizzas.list.map((pizza) =>
						action.payload.id === pizza.id
							? {
								...pizza,
								sizes: [...pizza.sizes, action.payload.size],
							}
							: pizza
					),
				},
			};
		}
		case "ADD_ADMIN_PIZZA_TYPE": {
			return {
				...state,
				stockPizzas: {
					...state.stockPizzas,
					list: state.stockPizzas.list.map((pizza) =>
						action.payload.id === pizza.id
							? {
								...pizza,
								types: [...pizza.types, action.payload.type],
							}
							: pizza
					),
				},
			};
		}
		case "SET_ADMIN_PIZZA_TYPES_SIZES": {
			return {
				...state,
				stockPizzas: {
					...state.stockPizzas,
					list: state.stockPizzas.list.map((pizza) =>
						action.payload.id === pizza.id
							? {
								...pizza,
								sizes: action.payload.sizes.map((size) => size.name),
								types: action.payload.types.map((type) => type.name),
							}
							: pizza
					),
				},
			};
		}
		case "REMOVE_ADMIN_PIZZA_TYPES_SIZES": {
			return {
				...state,
				stockPizzas: {
					...state.stockPizzas,
					list: state.stockPizzas.list.map((pizza) =>
						action.payload === pizza.id
							? {
								...pizza,
								sizes: [],
								types: [],
							}
							: pizza
					),
				},
			};
		}
		case "ADD_ADMIN_PIZZA": {
			const firstPizzaItemId = state.pizzas.list[0];
			return {
				...state,
				pizzas: {
					...state.pizzas,
					list: [action.payload, ...state.pizzas.list],
				},
			};
		}
		case "DELETE_ADMIN_PIZZA": {
			return {
				...state,
				pizzas: {
					...state.pizzas,
					list: state.pizzas.list.filter(
						(pizza) => pizza.id !== action.payload
					),
				},
			};
		}
		case "SET_PIZZAS_SALES": {
			return {
				...state,
				pizzasSales: action.payload,
			};
		}
		case "SET_PIZZA_SALES_BY": {
			return {
				...state,
				sales: action.payload,
			};
		}
		case "SET_ADMIN_USERS": {
			return {
				...state,
				users: action.payload,
			};
		}
		case "SET_ADMIN_USER_ROLE": {
			return {
				...state,
				users: state.users.map((user) =>
					user.id === action.payload.id
						? {...user, role: action.payload.role}
						: user
				),
			};
		}
		default:
			return state;
	}
};

export default admin;
