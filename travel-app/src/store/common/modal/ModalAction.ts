import { SearchModalSettingsTypes } from "../../../helpers/enums";
import { OPEN, CLOSE, SET_CONTENT } from "./models/actions";

export const openModal = () => ({
  type: OPEN,
});

export const closeModal = () => ({
  type: CLOSE,
});

export const setModalContent = (type: SearchModalSettingsTypes) => ({
  type: SET_CONTENT,
  payload: type,
});
