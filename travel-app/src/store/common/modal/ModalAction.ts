import { OPEN, CLOSE } from "./models/actions";

export const openModal = () => ({
  type: OPEN,
});

export const closeModal = () => ({
  type: CLOSE,
});
