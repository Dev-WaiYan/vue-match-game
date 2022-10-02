export interface CompletedAnswer {
  targetId: number;
  answerId: number;
}

export interface CardModel {
  id: number;
  text: string;
}

export interface CurrentTarget {
  targetId: number;
  answerId: number;
}
