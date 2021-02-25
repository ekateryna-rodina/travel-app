import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { SearchModalSettingsTypes } from "../../helpers/enums";
import { AppState } from "../../store/rootStore";
import PickerButton from "./PickerButton";
import moment from "moment";

const formatDate = (startDate: string, endDate: string) => {
  let title = "Dates";
  if (startDate === "") {
    return title;
  }

  // console.error(dd.t;
  const startDateMoment = moment(startDate, "YYYY-MM-DD");
  const endDateMoment = moment(endDate, "YYYY-MM-DD");
  const [startMonth, startDay, endMonth, endDay] = [
    startDateMoment.format("M"),
    startDateMoment.format("D"),
    endDateMoment.format("M"),
    endDateMoment.format("D"),
  ];

  const [startMonthShort, endMonthShort] = [
    moment.monthsShort()[parseInt(startMonth) - 1],
    moment.monthsShort()[parseInt(endMonth) - 1],
  ];

  if (startMonth === endMonth) {
    title = `${startMonthShort} ${startDay.toString()} - ${endDay.toString()}`;
  } else {
    title = `${startMonthShort} ${startDay.toString()} - ${endMonthShort} ${endDay.toString()}`;
  }
  return title;
};

export const DatePicker = () => {
  const { dates } = useSelector((state: AppState) => state.search);
  const { startDate, endDate } = dates;
  const [datesTitle, setDatesTitle] = useState<string>("Dates");
  useEffect(() => {
    const title = formatDate(startDate, endDate);
    setDatesTitle(title);
  }, [dates]);
  return (
    <PickerButton type={SearchModalSettingsTypes.date}>
      {datesTitle}
    </PickerButton>
  );
};

export default DatePicker;
