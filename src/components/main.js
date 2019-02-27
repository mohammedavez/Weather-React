import React, { Component } from "react";
import Columns from "./colums";
class Main extends Component {
  state = {
    data: null,
    weatherDays: null,
    Day: null
  };
  componentDidMount() {
    fetch(this.props.url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          data: data.list
        });
      })
      .then(() => {
        var Day = [];
        var weatherDays = [];
        for (let i = 0; i < this.state.data.length; i += 8) {
          weatherDays.push(this.state.data[i]);
          var d = new Date(this.state.data[i].dt_txt);
          Day.push(d.getDay());
        }
        this.setState({ weatherDays, Day: Day });
      });
  }
  render() {
    if (this.state.weatherDays) {
      console.log(this.state.weatherDays);

      return (
        <div className="row con2 justify-content-center">
          <Columns
            day={this.state.weatherDays[0]}
            dayCount={this.state.Day[0]}
          />
          <Columns
            day={this.state.weatherDays[1]}
            dayCount={this.state.Day[1]}
          />
          <Columns
            day={this.state.weatherDays[2]}
            dayCount={this.state.Day[2]}
          />
          <Columns
            day={this.state.weatherDays[3]}
            dayCount={this.state.Day[3]}
          />
          <Columns
            day={this.state.weatherDays[4]}
            dayCount={this.state.Day[4]}
          />
        </div>
      );
    } else {
      return (
        <div className="loading">
          <h2>Loading...</h2>
        </div>
      );
    }
  }
}
export default Main;
