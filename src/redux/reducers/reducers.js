import { DECREMENT, INCREMENT } from "../action_constants/actionConstants";

const initialState = {
  value: 0,
};

export const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + 1,
      };

    case DECREMENT:
      return {
        ...state,
        value: state.value - 1,
      };
    default:
      return state;
  }
};
