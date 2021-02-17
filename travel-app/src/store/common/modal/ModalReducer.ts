import { Action, Reducer } from "redux";
import { ModalActionTypes, OPEN, CLOSE } from "./models/actions";
import { IModal } from "./models/Modal";

const initialState: IModal = {
  isOpened: false,
};

const modalReducer: Reducer<IModal, Action> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case OPEN:
      return {
        isOpened: true,
      };
    case CLOSE:
      return {
        isOpened: false,
      };
    default:
      return state;
  }
};

export default modalReducer;
