export interface InitialState {
  candidate: Payload;
}

interface Payload {
  loading: boolean;
  data: null | any;
  error: null | any;
}
