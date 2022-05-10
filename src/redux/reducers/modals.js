import { MODALS } from "../../utils/constants";

const initialState = {
  [MODALS.СheckoutResultModal]: { visibility: false },
  [MODALS.СheckoutModal]: { visibility: false },
};

const modals = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_MODAL_VISIBILITY": {
      return {
        ...state,
        [action.payload]: {
          ...modals[action.payload],
          visibility: !state[action.payload].visibility,
        },
      };
    }
    default:
      return state;
  }
};

export default modals;
