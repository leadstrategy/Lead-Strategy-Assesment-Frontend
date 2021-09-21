import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// types
import { InitialState } from './types';

const initialState: InitialState = {
  quiz: {
    loading: false,
    data: null,
    error: null,
  },
  result: {
    loading: false,
    data: null,
    error: null,
  },
};

const createdSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    fetchQuiz(state) {
      return {
        ...state,
        quiz: { ...state.quiz, loading: true },
      };
    },
    fetchQuizSuccess(state, action: PayloadAction<any | void>) {
      return {
        ...state,
        quiz: {
          ...state.quiz,
          loading: false,
          data: action?.payload?.data,
          error: null,
        },
      };
    },
    fetchQuizError(state, action: PayloadAction<any | void>) {
      return {
        ...state,
        quiz: {
          ...state.quiz,
          loading: false,
          data: null,
          error: action?.payload ? (action?.payload.data ? action?.payload.data.message : action?.payload.data) : null,
        },
      };
    },
    fetchQuizReset(state) {
      return {
        ...state,
        quiz: initialState.quiz,
      };
    },
    addResult(state, action: PayloadAction<any | void>) {
      return {
        ...state,
        result: { ...state.result, loading: true },
      };
    },
    addResultSuccess(state, action: PayloadAction<any | void>) {
      return {
        ...state,
        result: {
          ...state.result,
          loading: false,
          data: action?.payload?.data,
          error: null,
        },
      };
    },
    addResultError(state, action: PayloadAction<any | void>) {
      return {
        ...state,
        result: {
          ...state.result,
          loading: false,
          data: null,
          error: action?.payload ? (action?.payload.data ? action?.payload.data.message : action?.payload.data) : null,
        },
      };
    },
    addResultReset(state) {
      return {
        ...state,
        result: initialState.result,
      };
    },
  },
});

const { actions, reducer } = createdSlice;

export const {
  fetchQuiz,
  fetchQuizSuccess,
  fetchQuizError,
  fetchQuizReset,
  addResult,
  addResultSuccess,
  addResultError,
  addResultReset,
} = actions;

export default reducer;
