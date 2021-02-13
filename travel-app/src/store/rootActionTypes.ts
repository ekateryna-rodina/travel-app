import { SearchActionTypes } from "./search/models/actions";
import { FetchCommonActionTypes } from "./common/models/actions";

export type AppActionTypes = FetchCommonActionTypes | SearchActionTypes;
