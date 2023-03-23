export interface Question {
  id: number;
  title: string;
  subtitle: string;
  isMultiSelect: boolean;
  answers: Answer[];
}

export interface Answer {
  id: number;
  title: string;
  subtitle: string;
  value: string;
  imagePath: string;
}
