import { SearchModalSettingsTypes } from "../../../../helpers/enums";

export const OPEN = "OPEN";
export const CLOSE = "CLOSE";
export const SET_CONTENT = "SET_ACTIVE_MODAL_CONTENT";

interface OpenModal {
  type: typeof OPEN;
}

interface CloseModal {
  type: typeof CLOSE;
}

interface SetContent {
  type: typeof SET_CONTENT;
  payload: typeof SearchModalSettingsTypes;
}

export type ModalActionTypes = OpenModal | CloseModal | SetContent;
