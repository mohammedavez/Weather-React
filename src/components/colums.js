import React from "react";

const Columns = props => {
  console.log(props.day);
  var snow = "wi wi-day-snow size";
  switch (props.dayCount) {
    case 0:
      var day = "Sun";
      break;
    case 1:
      var day = "Mon";
      break;
    case 2:
      var day = "Tues";
      break;
    case 3:
      var day = "Wed";
      break;
    case 4:
      var day = "Thur";
      break;
    case 5:
      var day = "Fri";
      break;
    case 6:
      var day = "Sat";
      break;
  }
  return (
    <div className="col-sm-2 bor ">
      <p>{day}</p>
      {/* <i className={snow} /> */}
      <img
        className="icons"
        src={
          "http://openweathermap.org/img/w/" +
          props.day.weather[0].icon +
          ".png"
        }
        alt=""
      />
      <p>
        <span className="lead max">{props.day.main.temp_max}</span>
        &#176; &nbsp;&nbsp;
        <span className="text-muted min">{props.day.main.temp_min}</span>
        &#176;
      </p>
    </div>
  );
};
export default Columns;
