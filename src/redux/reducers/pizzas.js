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
        fields[item.id] = { size: item.sizes[0], type: item.types[0] };
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
      newSelectedFields[action.payload.id] = action.payload.field;
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
    case "RESET_PIZZAS": {
      return initialState;
    }
    default:
      return state;
  }
};

export default pizzas;
