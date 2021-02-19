import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import StyleGuide from "../styles/StyleGuide";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import globalStyles from "../styles/GlobalStyles";
import moment from "moment";
import Button from "./shared/Button";
import { useDispatch } from "react-redux";
import { setTravelDates } from "../store/search/SearchAction";

const { height } = StyleGuide.size;
const styles = StyleSheet.create({
  container: {
    // marginHorizontal: StyleGuide.spacing,
    // marginVertical: StyleGuide.spacing,
  },
  header: {
    // flex: 1,
    backgroundColor: StyleGuide.palette.primaryTransparent,
    padding: StyleGuide.spacing,
    ...globalStyles.roundedTopCorner,
    // flex: 1,
  },
  headerLabelText: {
    ...StyleGuide.typography.headline,
    color: StyleGuide.palette.light,
  },
  headerDatesText: {
    ...StyleGuide.typography.footnoteBold,
    color: StyleGuide.palette.light,
  },
  calendar: {
    // flex: 5,
    // flex: 5,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "28%",
    width: "100%",
    backgroundColor: StyleGuide.palette.light,
    padding: StyleGuide.spacing,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  button: {
    width: 80,
    height: 40,
    borderRadius: 10,
    backgroundColor: StyleGuide.palette.dark,
    color: StyleGuide.palette.white,
  },
});

const datePlaceholder = "Select date";
const getMarkedDays = (startDate: string, endDate: string) => {
  //   set boundaries selected
  let days = {
    [startDate]: {
      startingDay: true,
      color: StyleGuide.palette.dark,
      textColor: "white",
    },
    [endDate]: {
      endingDay: true,
      color: StyleGuide.palette.dark,
      textColor: "white",
    },
  };

  if (startDate !== datePlaceholder && endDate !== datePlaceholder) {
    let dateArray = [];
    let currentDate = moment(startDate).add(1, "days");
    let stopDate = moment(endDate);
    while (currentDate < stopDate) {
      dateArray.push(moment(currentDate).format("YYYY-MM-DD"));
      currentDate = moment(currentDate).add(1, "days");
    }

    for (let i of dateArray) {
      days[i] = {
        color: StyleGuide.palette.primary,
        textColor: "white",
      };
    }
  }
  return days;
};

const DatesModalContent = () => {
  let [startDate, setStartDate] = useState<string>(datePlaceholder);
  let [endDate, setEndDate] = useState<string>(datePlaceholder);
  const [markedDays, setMarkedDays] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    let days = getMarkedDays(startDate, endDate);
    setMarkedDays(days);
  }, [startDate, endDate]);

  const selectDay = (selected: any) => {
    const { dateString, day, month, year } = selected;
    // no date selected
    if (startDate === datePlaceholder) {
      setStartDate(dateString);
    } else if (endDate === datePlaceholder) {
      // current > start -> set end date
      if (new Date(startDate) < new Date(dateString)) {
        setEndDate(dateString);
      } else {
        setStartDate(dateString);
        setEndDate(datePlaceholder);
      }
    } else {
      setStartDate(dateString);
      setEndDate(datePlaceholder);
    }
  };
  const applyDates = () => {
    dispatch(
      setTravelDates({
        startDate: startDate,
        endDate: endDate,
      })
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{}}>
            <Text style={styles.headerLabelText}>Check In</Text>
            <Text style={styles.headerDatesText}>{startDate}</Text>
          </View>
          <View style={{}}>
            <Text style={styles.headerLabelText}>Check Out</Text>
            <Text style={styles.headerDatesText}>{endDate}</Text>
          </View>
        </View>
      </View>
      <View style={styles.calendar}>
        <CalendarList
          current={new Date()}
          onDayPress={(day) => {
            selectDay(day);
          }}
          markingType={"period"}
          markedDates={markedDays}
          minDate={"2021-02-25"}
          disableAllTouchEventsForDisabledDays={true}
          theme={{
            todayTextColor: StyleGuide.palette.bright,
            dayTextColor: "#2d4150",
            textDisabledColor: StyleGuide.palette.primaryTransparent,
            monthTextColor: StyleGuide.palette.dark,
            indicatorColor: "blue",
            textDayFontFamily: "JosefinSans_400Regular",
            textMonthFontFamily: "JosefinSans_400Regular",
            textDayHeaderFontFamily: "JosefinSans_400Regular",
            textMonthFontWeight: "bold",
            textDayHeaderFontWeight: "300",
            textDayFontSize: 16,
            textMonthFontSize: 16,
            textDayHeaderFontSize: 16,
          }}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button style={styles.button} handler={applyDates}>
          OK
        </Button>
      </View>
    </View>
  );
};

export default DatesModalContent;
