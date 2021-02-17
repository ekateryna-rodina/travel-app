import { SearchActionTypes } from "./search/models/actions";
import { FetchActionTypes } from "./common/request/models/actions";

export type AppActionTypes = FetchActionTypes | SearchActionTypes;
