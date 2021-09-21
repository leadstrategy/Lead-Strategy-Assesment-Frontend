import { fork } from 'redux-saga/effects';

//watchers
import quizWatchers from 'features/quiz/quizWatchers';
import userWatchers from 'features/user/userWatchers';

export default function* startforman() {
  yield fork(quizWatchers);
  yield fork(userWatchers);
}
