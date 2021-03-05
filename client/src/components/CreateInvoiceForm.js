import React from 'react';
import TextField from "@material-ui/core/TextField";
import DateInput from "./DateInput";

const CreateInvoiceForm = (props) => {
  return (
    <form onSubmit={(e) => props.onFormSubmit(e)}>
            <TextField
              id="studentNameInput"
              label="Student Name"
              value={props.studentName}
              onChange={(e) => props.setStudentName(e.target.value)}
            />
            <TextField
              id="yourNameInput"
              label="Your Name"
              value={props.yourName}
              onChange={(e) => props.setYourName(e.target.value)}
            />
            <TextField
              id="parentName"
              label="Parent Name"
              value={props.parentName}
              onChange={(e) => props.setParentName(e.target.value)}
            />
            <TextField
              id="parentEmail"
              label="Parent Email"
              value={props.parentEmail}
              onChange={(e) => props.setParentEmail(e.target.value)}
            />
            <TextField id="invoiceMonth" label="Month" />
            <TextField
              id="numLessons"
              label="Number of Lessons"
              type="number"
              value={props.lessonNum}
              onChange={(e) => {
                props.setLessonNum(e.target.value);
              }}
            />

            <div className="row">
              <div className="col-7">
                <DateInput id="date-input-0" onDateChange={props.onDateChange} value={props.lessons[0].date} />
              </div>
              <div className="col-5">
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
              <div className="col-7">
                <DateInput id="date-input-1" onDateChange={props.onDateChange} value={props.lessons[1].date} />
              </div>
              <div className="col-5">
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
              <div className="col-7">
                <DateInput id="date-input-2" onDateChange={props.onDateChange} value={props.lessons[2].date} />
              </div>
              <div className="col-5">
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
              <div className="col-7">
                <DateInput id="date-input-3" onDateChange={props.onDateChange} value={props.lessons[3].date} />
              </div>
              <div className="col-5">
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
            <div>
              <button className="btn btn-secondary" type="submit">View Pdf</button>
            </div>
          </form>
  )
}

export default CreateInvoiceForm;
