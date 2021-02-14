import { Action, Reducer } from "redux";
import {
  CounterActionType,
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
} from "./models/actions";

import { Counter } from "./models/Counter";

const initialState: Counter = {
  count: 0,
};

export const counterReducer: Reducer<Counter, Action> = (
  state = initialState,
  action
) => {
  const nextState = {
    count: state.count,
  };
  switch (action.type) {
    case INCREMENT_COUNTER:
      nextState.count = state.count + 1;
      return nextState;
    case DECREMENT_COUNTER:
      nextState.count = state.count - 1;
      return nextState;
    default:
      return state;
  }
};
