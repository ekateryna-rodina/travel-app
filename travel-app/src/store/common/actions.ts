import { ModalActionTypes } from "./modal/models/actions";
import { FetchActionTypes } from "./request/models/actions";

export type CommonActionTypes = FetchActionTypes | ModalActionTypes;
