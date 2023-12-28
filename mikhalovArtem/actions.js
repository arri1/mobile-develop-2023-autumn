export const ADD_NUMBER = 'ADD_NUMBER';
export const CLEAR = 'CLEAR';
export const CALCULATE_RESULT = 'CALCULATE_RESULT';

export const addNumber = (number) => ({
  type: ADD_NUMBER,
  payload: number,
});

export const clear = () => ({
  type: CLEAR,
});

export const calculateResult = () => ({
  type: CALCULATE_RESULT,
});