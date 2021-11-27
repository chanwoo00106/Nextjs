const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

export const increase = () => ({
  type: INCREASE,
});

export const decrease = () => ({
  type: DECREASE,
});

const initialState = 0;

function counter(state = initialState, action) {
  switch (action) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;

    default:
      return state;
  }
}

export default counter;
