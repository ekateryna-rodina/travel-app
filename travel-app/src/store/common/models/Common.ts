export interface ILoading {
  fontLoading: boolean;
  picturesLoading: boolean;
}

export interface ICard {
  size: "small" | "medium" | "large";
}

export interface RequestState {
  loading: boolean;
  error: any;
}
