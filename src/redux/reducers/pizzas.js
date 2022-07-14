const initialState = {
	items: {
		list: [],
		totalCount: 0,
	},
	selectedFields: {},
	sizes: [],
	types: [],
	isLoaded: false,
};

const pizzas = (state = initialState, action) => {
	switch (action.type) {
		case "SET_PIZZAS":
			const fields = {};

			action.payload.list.forEach((item) => {
				const sizeName = item.sizes[0];
				const typeName = item.types[0];

				fields[item.id] = {
					size: sizeName,
					type: typeName,
					additionalPrice: 0,
				};
			});

			return {
				...state,
				items: action.payload,
				selectedFields: fields,
				isLoaded: true,
			};
		case "SET_LOADED":
			return {
				...state,
				isLoaded: action.payload,
			};
		case "SET_SELECTED_FIELDS":
			return {
				...state,
				selectedFields: action.payload,
			};
		case "SET_SELECTED_FIELD":
			const newSelectedFields = { ...state.selectedFields };
			const additionalPrice =
				state.types.find((type) => type.name === action.payload.field.type)
					.price +
				state.sizes.find((size) => size.name === action.payload.field.size)
					.price;

			newSelectedFields[action.payload.id] = {
				...action.payload.field,
				additionalPrice,
			};
			return {
				...state,
				selectedFields: newSelectedFields,
			};
		case "SET_PIZZA_SIZES": {
			return {
				...state,
				sizes: action.payload,
			};
		}
		case "SET_PIZZA_TYPES": {
			return {
				...state,
				types: action.payload,
			};
		}
		case "SET_PIZZA_SIZE": {
			return {
				...state,
				sizes: state.sizes.map((size) =>
					size.id === action.payload.id ? action.payload : size
				),
			};
		}
		case "SET_PIZZA_TYPE": {
			return {
				...state,
				sizes: state.types.map((type) =>
					type.id === action.payload.id ? action.payload : type
				),
			};
		}
		case "ADD_PIZZA_SIZE": {
			return {
				...state,
				sizes: [...state.sizes, action.payload],
			};
		}
		case "ADD_PIZZA_TYPE": {
			return {
				...state,
				types: [...state.types, action.payload],
			};
		}
		case "DELETE_PIZZA_SIZE": {
			return {
				...state,
				sizes: state.sizes.filter((size) => size.id !== action.payload),
			};
		}
		case "DELETE_PIZZA_TYPE": {
			return {
				...state,
				types: state.types.filter((type) => type.id !== action.payload),
			};
		}
		case "RESET_PIZZAS": {
			return initialState;
		}
		default:
			return state;
	}
};

export default pizzas;
