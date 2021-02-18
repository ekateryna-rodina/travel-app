import { Action, Reducer } from "redux";
import { SearchModalSettingsTypes } from "../../../helpers/enums";
import { ModalActionTypes, OPEN, CLOSE, SET_CONTENT } from "./models/actions";
import { IModal } from "./models/Modal";

const initialState: IModal = {
  isOpened: false,
  selectedIndex: null,
};

const modalReducer: Reducer<IModal, Action> = (
  state = initialState,
  action: ModalActionTypes
) => {
  switch (action.type) {
    case OPEN:
      return {
        ...state,
        isOpened: true,
      };
    case CLOSE:
      return {
        isOpened: false,
      };
    case SET_CONTENT:
      return {
        ...state,
        selectedIndex: action.payload,
      };
    default:
      return state;
  }
};

export default modalReducer;
