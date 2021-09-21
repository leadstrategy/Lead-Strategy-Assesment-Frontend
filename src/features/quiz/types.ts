export interface InitialState {
  quiz: Payload;
  result: Payload;
}

interface Payload {
  loading: boolean;
  data: null | any;
  error: null | any;
}
