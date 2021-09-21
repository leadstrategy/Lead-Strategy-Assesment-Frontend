import { takeLatest } from 'redux-saga/effects';

//actions
import * as quizSlice from './quizSlice';

//saga
import * as quizSaga from './quizSaga';

export default function* watchers() {
  yield takeLatest(quizSlice.fetchQuiz.type, quizSaga.fetchQuiz);
  yield takeLatest(quizSlice.addResult.type, quizSaga.addResult);
}
