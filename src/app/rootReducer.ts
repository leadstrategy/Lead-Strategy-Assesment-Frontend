// reducers
import quiz from 'features/quiz/quizSlice';
import user from 'features/user/userSlice';
import questions from 'features/questions/questionsSlice';

const rootReducer = {
  quiz,
  user,
  questions,
};

export type RootState = ReturnType<any>;

export default rootReducer;
