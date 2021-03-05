import React, { useEffect, useState } from "react";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import "date-fns";
import MyDocument from "./components/MyDocument";
import "./App.css";
import CreateInvoiceForm from "./components/CreateInvoiceForm";

const App = () => {
  const [yourName, setYourName] = useState("Jeff Carmona");
  const [yourEmail, setYourEmail] = useState("");
  const [months, setMonths] = useState([]);
  const [lessonNum, setLessonNum] = useState(4);
  const [studentName, setStudentName] = useState("");
 
  const [parentName, setParentName] = useState("");
  const [parentEmail, setParentEmail] = useState("");
  const [lessons, setLessons] = useState([
    { date: new Date().toLocaleDateString(), cost: 21 },
    { date: new Date().toLocaleDateString(), cost: 21 },
    { date: new Date().toLocaleDateString(), cost: 21 },
    { date: new Date().toLocaleDateString(), cost: 21 },
  ]);
  const [total, setTotal] = useState(84);
  const [pdfData, setPdfData] = useState({
    lessons: lessons,
    total: total,
    lessonNum: lessonNum,
    studentName: studentName,
    yourName: yourName,
    parentName: parentName,
    parentEmail: parentEmail
  });

  const onFormSubmit = (e) => {
    e.preventDefault();
    setPdfData({
      ...pdfData,
      lessons,
      total,
      lessonNum,
      studentName,
      yourName,
      parentName,
      parentEmail
    });
  };

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
    <div className="pt-5">
      <CreateInvoiceForm
        onFormSubmit={onFormSubmit}
        onDateChange={onDateChange}
        onCostChange={onCostChange}
        yourEmail={yourEmail}
        setYourEmail={setYourEmail}
        months={months}
        setMonths={setMonths}
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
      <div>
        {pdfData !== {} ? (
          <PDFViewer className="container-fluid pdf-viewer">
            <MyDocument data={pdfData} title="test" />
          </PDFViewer>
        ) : null}
      </div>
    </div>
  );
};

/* <PDFDownloadLink document={<MyDocument />} fileName="test.pdf">
          {({ blob, url, loading, error }) =>
            loading ? "Loading document..." : "Download now!"
          }
        </PDFDownloadLink> */

export default App;
