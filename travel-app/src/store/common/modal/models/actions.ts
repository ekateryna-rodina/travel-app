export const OPEN = "OPEN";
export const CLOSE = "CLOSE";

interface OpenModal {
  type: typeof OPEN;
}

interface CloseModal {
  type: typeof CLOSE;
}

export type ModalActionTypes = OpenModal | CloseModal;
