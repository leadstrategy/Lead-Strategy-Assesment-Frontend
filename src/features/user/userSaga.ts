//services
import * as services from 'services/userService';

//actions
import * as actions from './userSlice';

import { returnSaga } from 'common/utils/sagaHelper';

export const addCandidate = returnSaga(
  services.addCandidate,
  actions.addCandidate,
  actions.addCandidateSuccess,
  actions.addCandidateError,
  200,
);
