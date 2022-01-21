import produce from "immer";

const ADD_TODO = "ADD_TODO/todo";
const UPDATE_TODO = "UPDATE_TODO/todo";
const DELETE_TODO = "DELETE_TODO/todo";

export const add_todo = (todoData) => ({
  type: ADD_TODO,
  payload: todoData,
});

export const update_todo = (id, todoData) => ({
  type: UPDATE_TODO,
  id,
  payload: todoData,
});

export const delete_todo = (id) => ({
  type: DELETE_TODO,
  id,
});

const initialState = [];

export default function todo(state = initialState, action) {
  return produce(state, (draft) => {
    switch (action) {
      case ADD_TODO:
        draft.push({ ...action.payload });
        break;
      case UPDATE_TODO:
        const index = draft.findIndex((todo) => todo.id === action.id);
        if (index === -1) break;
        draft[index] = {
          id: action.id,
          ...action.payload,
        };
        break;
      case DELETE_TODO:
        draft = draft.filter((todo) => todo.id !== action.id);
        break;
    }
  });
}
