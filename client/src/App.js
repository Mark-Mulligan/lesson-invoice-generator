import React, { useEffect, useState } from "react";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import MyDocument from "./components/MyDocument";
import DateInput from "./components/DateInput";
import "./App.css";

const App = () => {
  const [lessonNum, setLessonNum] = useState(4);
  const [lessons, setLessons] = useState([
    { date: "3-2-2021", cost: 21 },
    { date: "3-9-2021", cost: 21 },
    { date: "3-16-2021", cost: 21},
    { date: "3-23-2021", cost: 21}
  ]);
  const [total, setTotal] = useState([84]);

  const onDateChange = (date, inputId) => {
    console.log(inputId);
    let numRegex = /[0-9]+/;
    let result = inputId.match(numRegex);
    console.log(result[0]);
    updateFieldChanged("date", Number(result[0]), date);
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

  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-4">
          <div>
            <DateInput id="date-input-0" onDateChange={onDateChange} />
          </div>
          <div>
            <DateInput id="date-input-1" onDateChange={onDateChange} />
          </div>
          <div>
            <DateInput id="date-input-2" onDateChange={onDateChange} />
          </div>
          <div>
            <DateInput id="date-input-3" onDateChange={onDateChange} />
          </div>
        </div>
        <div className="col-8">
          <PDFViewer className="container-fluid pdf-viewer">
            <MyDocument data={{ lessons, total }} title="test" />
          </PDFViewer>
        </div>
      </div>
    </div>
  );
};

/* class App extends React.Component {
  state = {
    lessonDates: ["3-2-3021", "3-9-2021", "3-16-2021", "3-23-2021"],
    lessonRates: [22, 22, 22, 22],
    total: 84,
  };

  render() {
    return (
      <div className="mt-5 container">
        <PDFViewer className="container-fluid pdf-viewer">
          <MyDocument data={this.state} title="test"/>
        </PDFViewer>
      </div>
    );
  }
} */

/* <PDFDownloadLink document={<MyDocument />} fileName="test.pdf">
          {({ blob, url, loading, error }) =>
            loading ? "Loading document..." : "Download now!"
          }
        </PDFDownloadLink> */

export default App;
