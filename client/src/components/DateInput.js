import "date-fns";
import React, { useEffect, useState } from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import './DateInput.css';

const DateInput = (props) => {
  const [selectedDate, setSelectedDate] = useState(
    new Date()
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
    props.onDateChange(date.toLocaleDateString(), props.id);
    console.log(props);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        disableToolbar
        variant="inline"
        format="MM/dd/yyyy"
        margin="normal"
        id={props.id}
        label="Lesson Date"
        value={selectedDate}
        onChange={handleDateChange}
        KeyboardButtonProps={{
          "aria-label": "change date",
        }}
      />
    </MuiPickersUtilsProvider>
  );
};

export default DateInput;
