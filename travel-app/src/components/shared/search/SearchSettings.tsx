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
  const dd = new Date(startDate);
  console.error(dd.toDateString());
  // const startDateObj = moment(startDate, "YYYY-MM-DD");
  // const endDateObj = moment(endDate, "YYYY-MM-DD");
  // const [startMonth, startDay, endMonth, endDay] = [
  //   startDateObj.month(),
  //   startDateObj.day(),
  //   endDateObj.month(),
  //   endDateObj.day(),
  // ];

  // const [startMonthShort, endMonthShort] = [
  //   moment.monthsShort(startMonth),
  //   moment.monthsShort(endMonth),
  // ];

  // if (startMonth === endMonth) {
  //   title = `${startMonthShort} ${startDay} - ${endDay}`;
  // } else {
  //   title = `${startMonthShort} ${startDateObj.day} - ${endMonthShort} ${endDay}`;
  // }
  // console.warn(startDateObj);
  // console.warn(startDateObj.day());
  console.warn(moment(startDate).isValid());
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
