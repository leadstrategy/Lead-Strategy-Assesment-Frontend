import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// types
import { InitialState } from './types';

const initialState: InitialState = {
  currentQuestion: 0,
  answers: [],
  totalQuestions: 0,
  correctAnswers: 0,
};

const createdSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    setCurrentQuestion(state, action: PayloadAction<any | void>) {
      return {
        ...state,
        currentQuestion: action?.payload,
      };
    },
    setAnswers(state, action: PayloadAction<any | void>) {
      return {
        ...state,
        answers: [...state.answers, action?.payload],
      };
    },
    setTotalQuestions(state, action: PayloadAction<any | void>) {
      return {
        ...state,
        totalQuestions: action?.payload,
      };
    },
    setCorrectAnswers(state, action: PayloadAction<any | void>) {
      return {
        ...state,
        correctAnswers: action?.payload,
      };
    },
  },
});

const { actions, reducer } = createdSlice;

export const { setCurrentQuestion, setAnswers, setTotalQuestions, setCorrectAnswers } = actions;

export default reducer;
