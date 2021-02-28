import React from 'react';
import axios from 'axios';

class App extends React.Component {
  state = { appData: [] }

  getApiData = async () => {
    const { data } = await axios.get('/api/test');
    this.setState({ appData: data.testData });
  }

  renderData = (data) => {
    return data.map((item, index) => {
      return <p key={index}>{item}</p>
    });
  }

  componentDidMount() {
    this.getApiData();
  }

  render() {
    console.log(this.state.appData)
    return (
      <div>
      <h1>App Data</h1>
      {this.state.appData.length > 0 ? this.renderData(this.state.appData) : null}
    </div>
    )
  }
}

export default App;