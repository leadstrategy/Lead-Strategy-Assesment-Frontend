export interface InitialState {
  currentQuestion: number;
  totalQuestions: number;
  correctAnswers: number;
  answers: any;
}

interface Payload {
  loading: boolean;
  data: null | any;
  error: null | any;
}
