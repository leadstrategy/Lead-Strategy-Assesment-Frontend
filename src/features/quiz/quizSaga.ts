//services
import * as services from 'services/quizService';

//actions
import * as actions from './quizSlice';

import { returnSaga } from 'common/utils/sagaHelper';

export const fetchQuiz = returnSaga(services.fetchQuiz, actions.fetchQuiz, actions.fetchQuizSuccess, actions.fetchQuizError, 200);

export const addResult = returnSaga(services.addResult, actions.addResult, actions.addResultSuccess, actions.addResultError, 200);
