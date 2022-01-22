import { call, put, takeLatest } from "redux-saga/effects";
import { add_todo } from "../modules/todo";
import { getAllTodos } from "./api";

const INIT_TODO = "INIT_TODO/todo";

function* getTodo() {
  const res = yield call(getAllTodos);
  yield put(add_todo(res));
}

export default function* todoSaga() {
  yield takeLatest(INIT_TODO, getTodo);
}
