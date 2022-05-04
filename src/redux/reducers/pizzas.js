const initialState = {
  items: [],
  selectedFields: {},
  isLoaded: false,
};

const pizzas = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PIZZAS":
      return {
        ...state,
        items: action.payload,
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
    default:
      return {
        ...state,
      };
      break;
  }
};

export default pizzas;
