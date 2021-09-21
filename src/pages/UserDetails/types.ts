export interface FormItem {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
}

export interface InitialData {
  [index: string]: string | (string & Date) | undefined | boolean;
}
