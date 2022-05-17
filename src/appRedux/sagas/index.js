import {all} from "redux-saga/effects";
import authSagas from "./Auth";
import notesSagas from "./Notes";
import AdmissionSaga from "./admissionSaga";
export default function* rootSaga(getState) {
  yield all([
    authSagas(),
    AdmissionSaga()
  ]);
}
