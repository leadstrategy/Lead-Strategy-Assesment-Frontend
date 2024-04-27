import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// types
import { InitialState } from './types';

const initialState: InitialState = {
  candidate: {
    loading: false,
    data: null,
    error: null,
  },
};

const createdSlice = createSlice({
  name: 'candidate',
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    addCandidate(state, action: PayloadAction<any | void>) {
      return {
        ...state,
        candidate: { ...state.candidate, loading: true },
      };
    },
    addCandidateSuccess(state, action: PayloadAction<any | void>) {
      return {
        ...state,
        candidate: {
          ...state.candidate,
          loading: false,
          data: action?.payload?.data,
          error: null,
        },
      };
    },
    addCandidateError(state, action: PayloadAction<any | void>) {
      return {
        ...state,
        candidate: {
          ...state.candidate,
          loading: false,
          data: null,
          error: action?.payload ? (action?.payload.data ? action?.payload.data.message : action?.payload.data) : null,
        },
      };
    },
    addCandidateReset(state) {
      return {
        ...state,
        candidate: initialState.candidate,
      };
    },
  },
});

const { actions, reducer } = createdSlice;

export const { addCandidate, addCandidateSuccess, addCandidateError, addCandidateReset } = actions;

export default reducer;
