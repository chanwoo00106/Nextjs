import { put, delay, takeEvery } from "redux-saga/effects";
import {
  INCREASESAGA,
  DECREASESAGA,
  increase,
  decrease,
} from "../modules/counter";

function* increaseSaga() {
  console.log("hi");
  yield delay(1000);
  yield put(increase());
}

function* decreaseSaga() {
  yield delay(1000);
  yield put(decrease());
}

export default function* counterSaga() {
  yield takeEvery(INCREASESAGA, increaseSaga);
  yield takeEvery(DECREASESAGA, decreaseSaga);
}
