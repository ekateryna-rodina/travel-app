export interface LoadingInterface {
  fontLoading: boolean;
  picturesLoading: boolean;
}

export interface Card {
  size: "small" | "medium" | "large";
}

export interface RequestState {
  loading: boolean;
  error: any;
}
