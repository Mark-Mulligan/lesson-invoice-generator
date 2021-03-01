import React from "react";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import MyDocument from "./components/MyDocument";
import "./App.css";

class App extends React.Component {
  state = {
    lessonDates: ["3-2-3021", "3-9-2021", "3-16-2021", "3-23-2021"],
    lessonRates: [22, 22, 22, 22],
    total: 84,
  };

  render() {
    return (
      <div className="mt-5 container">
        <PDFViewer className="container-fluid pdf-viewer">
          <MyDocument data={this.state} />
        </PDFViewer>
      </div>
    );
  }
}

/* const App = () => {
  const [lessonAmount, setLessonAmout] = useState(21);

  return (
    <div className="mt-5 container">
        <PDFViewer className="container-fluid pdf-viewer">
          <MyDocument data={lessonAmount}/>
        </PDFViewer>
      </div>
  )
} */

/* <PDFDownloadLink document={<MyDocument />} fileName="test.pdf">
          {({ blob, url, loading, error }) =>
            loading ? "Loading document..." : "Download now!"
          }
        </PDFDownloadLink> */

export default App;
