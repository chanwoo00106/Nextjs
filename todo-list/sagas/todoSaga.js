import { call, put, select, takeEvery, takeLatest } from "redux-saga/effects";
import { add_todo } from "../modules/todo";
import { getAllTodos, getCheckedTodo } from "./api";

const INIT_TODO = "INIT_TODO/todo";
const CHECK_TODO = "CHECK_TODO/todo";

function* getTodo() {
  try {
    const res = yield call(getAllTodos);
    yield put(add_todo(res));
  } catch (e) {
    console.error(e);
  }
}

function* checkTodo(action) {
  try {
    const { todo } = yield select();
    const index = todo.findIndex((todo) => todo.id === action.id);
    yield call(getCheckedTodo, {
      id: action.id,
      checked: todo[index].checked,
    });
  } catch (e) {
    console.error(e);
  }
}

export default function* todoSaga() {
  yield takeLatest(INIT_TODO, getTodo);
  yield takeEvery(CHECK_TODO, checkTodo);
}
