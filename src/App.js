import React, { Component } from "react";
import Main from "./components/main";
class App extends Component {
  state = {
    url: null,
    data: null
  };
  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
        this.setState({
          url: `https://api.openweathermap.org/data/2.5/forecast?lat=${parseFloat(
            position.coords.latitude
          )}&lon=${parseFloat(
            position.coords.longitude
          )}&units=metric&appid=d8862f1c1a5e2782aff94192f1248331`
        });
      });
    }
    // console.log("componentdidmount");
    // console.log(this.state.url);
    // setTimeout(() => {
    //   fetch(this.state.url)
    //     .then(res => res.json())
    //     .then(data => {
    //       this.setState({ data: data });
    //       console.log(data);
    //     });
    // }, 2000);
  }
  render() {
    if (this.state.url !== null) {
      return (
        <div className="container con">
          <Main url={this.state.url} />
        </div>
      );
    } else {
      return (
        <div className="container">
          <h2>Loading...</h2>
        </div>
      );
    }
  }
}

export default App;
