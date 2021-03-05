import React from "react";
import TextField from "@material-ui/core/TextField";
import DateInput from "./DateInput";
import MonthSelect from "./MonthSelect";

const CreateInvoiceForm = (props) => {
  return (
    <form className="container" onSubmit={(e) => props.onFormSubmit(e)}>
      <div className="text-center">
        <h2>General Info</h2>
      </div>
      <div className="row text-center">
        <div className="col">
          <TextField
            id="yourNameInput"
            label="Your Name"
            value={props.yourName}
            onChange={(e) => props.setYourName(e.target.value)}
          />
        </div>
        <div className="col">
        <TextField
            id="yourEmailInput"
            label="Your Email"
            value={props.yourEmail}
            onChange={(e) => props.setYourEmail(e.target.value)}
          />
        </div>
        <div className="col">
          <MonthSelect months={props.months} setMonths={props.setMonths}/>
        </div>
        <div className="col">
          <TextField
            id="numLessons"
            label="Number of Lessons"
            type="number"
            value={props.lessonNum}
            onChange={(e) => {
              props.setLessonNum(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="row text-center">
        <div className="col">
          <TextField
            id="studentNameInput"
            label="Student Name"
            value={props.studentName}
            onChange={(e) => props.setStudentName(e.target.value)}
          />
        </div>
        <div className="col">
          <TextField
            id="parentName"
            label="Parent Name"
            value={props.parentName}
            onChange={(e) => props.setParentName(e.target.value)}
          />
        </div>
        <div className="col">
          <TextField
            id="parentEmail"
            label="Parent Email"
            value={props.parentEmail}
            onChange={(e) => props.setParentEmail(e.target.value)}
          />
        </div>
      </div>

      <div className="text-center mt-4 mb-4">
        <h2>Lessons</h2>
      </div>

      <div className="row">
        <div className="col text-right">
          <DateInput
            id="date-input-0"
            onDateChange={props.onDateChange}
            value={props.lessons[0].date}
          />
        </div>
        <div className="col">
          <TextField
            id="cost-input-0"
            label="Amount"
            type="number"
            value={props.lessons[0].cost}
            onChange={(e) => {
              props.onCostChange(e, e.target.id);
            }}
          />
        </div>
      </div>
      <div className="row">
        <div className="col text-right">
          <DateInput
            id="date-input-1"
            onDateChange={props.onDateChange}
            value={props.lessons[1].date}
          />
        </div>
        <div className="col">
          <TextField
            id="cost-input-1"
            label="Amount"
            type="number"
            value={props.lessons[1].cost}
            onChange={(e) => {
              props.onCostChange(e, e.target.id);
            }}
          />
        </div>
      </div>
      <div className="row">
        <div className="col text-right">
          <DateInput
            id="date-input-2"
            onDateChange={props.onDateChange}
            value={props.lessons[2].date}
          />
        </div>
        <div className="col">
          <TextField
            id="cost-input-2"
            label="Amount"
            type="number"
            value={props.lessons[2].cost}
            onChange={(e) => {
              props.onCostChange(e, e.target.id);
            }}
          />
        </div>
      </div>
      <div className="row">
        <div className="col text-right">
          <DateInput
            id="date-input-3"
            onDateChange={props.onDateChange}
            value={props.lessons[3].date}
          />
        </div>
        <div className="col">
          <TextField
            id="cost-input-3"
            label="Amount"
            type="number"
            value={props.lessons[3].cost}
            onChange={(e) => {
              props.onCostChange(e, e.target.id);
            }}
          />
        </div>
      </div>
      <div className="text-center mt-4">
        <button className="btn btn-secondary" type="submit">
          View Pdf
        </button>
      </div>
    </form>
  );
};

export default CreateInvoiceForm;
