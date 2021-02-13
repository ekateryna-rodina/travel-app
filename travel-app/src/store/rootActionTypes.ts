import { SearchActionTypes } from "./search/models/actions";
import { CommonActionTypes } from "./common/models/actions";

export type AppActionTypes = CommonActionTypes | SearchActionTypes;
