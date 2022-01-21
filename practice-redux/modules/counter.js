export const INCREASE = "INCREASE";
export const DECREASE = "DECREASE";
export const INCREASESAGA = "INCREASESAGA";
export const DECREASESAGA = "DECREASESAGA";

export const increase = () => ({
  type: INCREASE,
});
export const decrease = () => ({
  type: DECREASE,
});
export const increaseDelay = () => ({
  type: INCREASESAGA,
});
export const decreaseDelay = () => ({
  type: DECREASESAGA,
});

const initialState = 0;

function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;

    default:
      return state;
  }
}

export default counter;
