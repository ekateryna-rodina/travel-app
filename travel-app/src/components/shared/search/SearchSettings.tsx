import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import StyleGuide from "../../../styles/StyleGuide";
import PickerButton from "../PickerButton";
import { SearchModalSettingsTypes } from "../../../helpers/enums";
import { useSelector } from "react-redux";
import { AppState } from "../../../store/rootStore";
import moment from "moment";
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: StyleGuide.spacing,
  },
});

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

  // // console.warn(startDateMoment.format("M"));
  // console.warn();
  // const monthNumber = startDateMoment.format("M");
  // const monthShort = moment.monthsShort()[monthNumber];
  // console.warn(monthShort);
  // // console.warn(moment.monthsShort(3));
  if (startMonth === endMonth) {
    title = `${startMonthShort} ${startDay.toString()} - ${endDay.toString()}`;
  } else {
    title = `${startMonthShort} ${startDay.toString()} - ${endMonthShort} ${endDay.toString()}`;
  }
  // console.warn(startDateObj);
  // console.warn(startDateObj.day());
  // console.warn(startDateObj);
  return title;
};

export const SearchSettings = () => {
  const { dates } = useSelector((state: AppState) => state.search);
  const { startDate, endDate } = dates;
  const [datesTitle, setDatesTitle] = useState<string>("Dates");

  useEffect(() => {
    const title = formatDate(startDate, endDate);
    setDatesTitle(title);
  }, [dates]);

  return (
    <View style={styles.container}>
      <PickerButton type={SearchModalSettingsTypes.guests}>
        3 Guests
      </PickerButton>
      <PickerButton type={SearchModalSettingsTypes.date}>
        {datesTitle}
      </PickerButton>
      <PickerButton type={SearchModalSettingsTypes.filters}>
        Filters
      </PickerButton>
    </View>
  );
};
