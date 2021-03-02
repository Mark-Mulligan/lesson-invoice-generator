import React, { useEffect, useState } from "react";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import TextField from "@material-ui/core/TextField";
import MyDocument from "./components/MyDocument";
import DateInput from "./components/DateInput";
import "./App.css";

const App = () => {
  const [lessonNum, setLessonNum] = useState(4);
  const [lessons, setLessons] = useState([
    { date: "3-2-2021", cost: 21 },
    { date: "3-9-2021", cost: 21 },
    { date: "3-16-2021", cost: 21 },
    { date: "3-23-2021", cost: 21 },
  ]);
  const [total, setTotal] = useState(84);

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
    console.log(sum);
    return function cleanUp() {
      console.log("this ran");
      setTotal(sum);
    };
  }, [lessons]);

  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-lg-4 col-12">
          <form>
            <div className="row">
              <div className="col-7">
                <DateInput id="date-input-0" onDateChange={onDateChange} />
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
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-7">
                <DateInput id="date-input-1" onDateChange={onDateChange} />
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
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-7">
                <DateInput id="date-input-2" onDateChange={onDateChange} />
              </div>
              <div className="col-5">
                <TextField
                  id="cost-input-2"
                  label="Amount"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-7">
                <DateInput id="date-input-3" onDateChange={onDateChange} />
              </div>
              <div className="col-5">
                <TextField
                  id="cost-input-3"
                  label="Amount"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>
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
