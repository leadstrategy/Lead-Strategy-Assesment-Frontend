import axios from 'common/utils/api';

export const fetchQuiz = async () => {
  let apiRes = null;

  try {
    apiRes = await axios.get('/quizzes');
  } catch (err: any) {
    apiRes = err.response;
  }

  return apiRes;
};

export const addResult = async (payload: any) => {
  let apiRes = null;

  try {
    apiRes = await axios.post('/results', { ...payload });
  } catch (err: any) {
    apiRes = err.response;
  }

  return apiRes;
};
