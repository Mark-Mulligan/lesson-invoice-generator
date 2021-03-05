import React, { useEffect, useState, useRef } from "react";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import "date-fns";
import TextField from "@material-ui/core/TextField";
import MyDocument from "./components/MyDocument";
import DateInput from "./components/DateInput";
import "./App.css";

const App = () => {
  const [lessonNum, setLessonNum] = useState(4);
  const [studentName, setStudentName] = useState("");
  const [yourName, setYourName] = useState("");
  const [parentName, setParentName] = useState("");
  const [parentEmail, setParentEmail] = useState("");
  const [lessons, setLessons] = useState([
    { date: new Date().toLocaleDateString(), cost: 21 },
    { date: new Date().toLocaleDateString(), cost: 21 },
    { date: new Date().toLocaleDateString(), cost: 21 },
    { date: new Date().toLocaleDateString(), cost: 21 },
  ]);
  const [total, setTotal] = useState(84);

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log('lesson number', lessonNum);
    console.log('student name', studentName);
    console.log('your name', yourName);
    console.log('parent name', parentName);
    console.log('parent email', parentEmail);
    console.log('lessons', lessons);
    console.log('total', total);
  }

  const onDateChange = (date, inputId) => {
    console.log(inputId);
    let numRegex = /[0-9]+/;
    let result = inputId.match(numRegex);
    console.log(result[0]);
    updateFieldChanged("date", Number(result[0]), date);
  };

  const onCostChange = (event, inputId) => {
    console.log(event.target.value);
    let numRegex = /[0-9]+/;
    let result = inputId.match(numRegex);
    updateFieldChanged("cost", Number(result[0]), Number(event.target.value));
  };

  const updateFieldChanged = (name, index, value) => {
    let newArr = lessons.map((item, i) => {
      if (index === i) {
        return { ...item, [name]: value };
      } else {
        return item;
      }
    });
    setLessons(newArr);
  };

  useEffect(() => {
    let sum = 0;
    lessons.forEach((lesson) => {
      sum += lesson.cost;
    });
    setTotal(sum);
  }, [lessons]);

  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-lg-4 col-12">
          <form onSubmit={(e) => onFormSubmit(e)}>
            <TextField
              id="studentNameInput"
              label="Student Name"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
            />
            <TextField
              id="yourNameInput"
              label="Your Name"
              value={yourName}
              onChange={(e) => setYourName(e.target.value)}
            />
            <TextField
              id="parentName"
              label="Parent Name"
              value={parentName}
              onChange={(e) => setParentName(e.target.value)}
            />
            <TextField
              id="parentEmail"
              label="Parent Email"
              value={parentEmail}
              onChange={(e) => setParentEmail(e.target.value)}
            />
            <TextField id="invoiceMonth" label="Month" />
            <TextField
              id="numLessons"
              label="Number of Lessons"
              type="number"
              value={lessonNum}
              onChange={(e) => {
                setLessonNum(e.target.value);
              }}
            />

            <div className="row">
              <div className="col-7">
                <DateInput id="date-input-0" onDateChange={onDateChange} value={lessons[0].date} />
              </div>
              <div className="col-5">
                <TextField
                  id="cost-input-0"
                  label="Amount"
                  type="number"
                  value={lessons[0].cost}
                  onChange={(e) => {
                    onCostChange(e, e.target.id);
                  }}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-7">
                <DateInput id="date-input-1" onDateChange={onDateChange} value={lessons[1].date} />
              </div>
              <div className="col-5">
                <TextField
                  id="cost-input-1"
                  label="Amount"
                  type="number"
                  value={lessons[1].cost}
                  onChange={(e) => {
                    onCostChange(e, e.target.id);
                  }}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-7">
                <DateInput id="date-input-2" onDateChange={onDateChange} value={lessons[2].date} />
              </div>
              <div className="col-5">
                <TextField
                  id="cost-input-2"
                  label="Amount"
                  type="number"
                  value={lessons[2].cost}
                  onChange={(e) => {
                    onCostChange(e, e.target.id);
                  }}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-7">
                <DateInput id="date-input-3" onDateChange={onDateChange} value={lessons[3].date} />
              </div>
              <div className="col-5">
                <TextField
                  id="cost-input-3"
                  label="Amount"
                  type="number"
                  value={lessons[3].cost}
                  onChange={(e) => {
                    onCostChange(e, e.target.id);
                  }}
                />
              </div>
            </div>
            <div>
              <button className="btn btn-secondary" type="submit">View Pdf</button>
            </div>
          </form>
        </div>
        <div className="col-lg-8 col-12"></div>
      </div>
    </div>
  );
};

/* 
<PDFViewer className="container-fluid pdf-viewer">
            <MyDocument data={{}} title="test" />
          </PDFViewer>

*/

/* <PDFDownloadLink document={<MyDocument />} fileName="test.pdf">
          {({ blob, url, loading, error }) =>
            loading ? "Loading document..." : "Download now!"
          }
        </PDFDownloadLink> */

export default App;
