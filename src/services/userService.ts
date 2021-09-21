import axios from 'common/utils/api';

export const addCandidate = async (payload: any) => {
  let apiRes = null;

  try {
    apiRes = await axios.post('/candidates', { ...payload });
  } catch (err: any) {
    apiRes = err.response;
  }

  return apiRes;
};
