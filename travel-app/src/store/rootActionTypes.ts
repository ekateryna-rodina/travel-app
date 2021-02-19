import { SearchActionTypes } from "./search/models/actions";
import { FetchActionTypes } from "./common/request/models/actions";
import { ModalActionTypes } from "./common/modal/models/actions";

export type AppActionTypes =
  | FetchActionTypes
  | SearchActionTypes
  | ModalActionTypes;
