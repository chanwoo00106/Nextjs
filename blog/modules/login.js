import produce from "immer";

const LOGIN = "login/LOGIN";
const CHANGE = "login/CHANGE";

export const change = ({ username, password }) => ({
  action: CHANGE,
  payload: {
    username,
    password,
  },
});

const initialState = {
  username: "",
  password: "",
};

function login(state = initialState, action) {
  switch (action.type) {
    case CHANGE:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
}

export default login;
