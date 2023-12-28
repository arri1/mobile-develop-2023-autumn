import { ADD_NUMBER, CLEAR, CALCULATE_RESULT } from './actions';

const initialState = {
  displayValue: '0',
};

const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NUMBER:
      return {
        ...state,
        displayValue: state.displayValue === '0' ? action.payload : state.displayValue + action.payload,
      };
    case CLEAR:
      return {
        ...state,
        displayValue: '0',
      };
    case CALCULATE_RESULT:
      try {
        return {
          ...state,
          displayValue: eval(state.displayValue).toString(),
        };
      } catch (error) {
        return {
          ...state,
          displayValue: 'Error',
        };
      }
    default:
      return state;
  }
};

export default calculatorReducer;