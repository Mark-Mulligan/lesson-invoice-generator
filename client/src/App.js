import React, { useEffect, useState, useRef } from "react";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import "date-fns";
import TextField from "@material-ui/core/TextField";
import MyDocument from "./components/MyDocument";
import DateInput from "./components/DateInput";
import "./App.css";
import CreateInvoiceForm from "./components/CreateInvoiceForm";
import { set } from "date-fns";

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
    let numRegex = /[0-9]+/;
    let result = inputId.match(numRegex);
    updateFieldChanged("date", Number(result[0]), date);
  };

  const onCostChange = (event, inputId) => {
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
      <CreateInvoiceForm 
        onFormSubmit={onFormSubmit} 
        onDateChange={onDateChange}
        onCostChange={onCostChange}
        lessonNum={lessonNum}
        setLessonNum={setLessonNum}
        studentName={studentName}
        setStudentName={setStudentName}
        yourName={yourName}
        setYourName={setYourName}
        parentName={parentName}
        setParentName={setParentName}
        parentEmail={parentEmail}
        setParentEmail={setParentEmail}
        lessons={lessons}
        setLessons={setLessons}
        total={total}
        setTotal={setTotal}
        />
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
