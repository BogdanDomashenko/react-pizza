const initialState = {
  sortBy: "popular",
  category: null,
  categories: [],
};

const filers = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SORT_BY": {
      return {
        ...state,
        sortBy: action.payload,
      };
    }
    case "SET_CATEGORY": {
      return {
        ...state,
        category: action.payload,
      };
    }
    case "SET_CATEGORIES": {
      return {
        ...state,
        categories: action.payload,
      };
    }
    default:
      return state;
  }
};

export default filers;
