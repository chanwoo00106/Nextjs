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

const initialState = [
  {
    id: 0,
    todo: "놀기",
    createAt: new Date().toString(),
    description: "아무 생각 없이 개발하자 ㅎㅎ",
  },
];

export default function todo(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return produce(state, (draft) => {
        draft.push(...action.payload);
      });
    case UPDATE_TODO:
      return produce(state, (draft) => {
        const index = draft.findIndex((todo) => todo.id === action.id);
        if (index === -1) return;
        draft[index] = {
          id: action.id,
          ...action.payload,
        };
      });
    case DELETE_TODO:
      return produce(state, (draft) => {
        draft = draft.filter((todo) => todo.id !== action.id);
      });
    default:
      return state;
  }
}
