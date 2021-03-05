import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, makeStyles, Input, Chip } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  formControl: {
    minWidth: 165,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: 10,
  },
}));

const monthList = [
  'January',
  'Feburary',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const MonthSelect = (props) => {
  const classes = useStyles();

  const handleChange = (event) => {
    props.setMonths(event.target.value);
  };

  return (
    <FormControl className={classes.formControl}>
        <InputLabel id="monthSelectLabel">Month(s)</InputLabel>
        <Select
          labelId="monthSelectLabel"
          id="monthSelect"
          multiple
          value={props.months}
          onChange={handleChange}
          input={<Input id="select-multiple-chip" />}
          renderValue={(selected) => (
            <div className={classes.chips}>
              {selected.map((value) => (
                <Chip key={value} label={value} className={classes.chip} />
              ))}
            </div>
          )}
          MenuProps={MenuProps}
        >
          {monthList.map((month) => (
            <MenuItem key={month} value={month}>
              {month}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
  )
}

export default MonthSelect;