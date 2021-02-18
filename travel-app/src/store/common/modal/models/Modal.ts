import { SearchModalSettingsTypes } from "../../../../helpers/enums";

export interface IModal {
  isOpened: boolean;
  selectedIndex:
    | SearchModalSettingsTypes.destination
    | SearchModalSettingsTypes.guests
    | SearchModalSettingsTypes.date
    | SearchModalSettingsTypes.filters
    | null;
}
