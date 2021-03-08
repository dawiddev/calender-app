import React, { Component } from "react";
import Month from "../Month/Month";

export default class Calender extends Component {
  constructor(props) {
    super(props);

    this.state = {
      days: [
        // {number: 1, id: 1},{number: 2, id: 2}
      ],
    };
  }
  componentDidMount() {
    let daysInAMonth = [];

    for (let x = 1; x <= 31; x++) {
      daysInAMonth.push({
        number: x,
        id: x,
      });
    }

    // console.log(daysInAMonth);

    this.setState({
      days: daysInAMonth,
    });
  }

  render() {
    const { days } = this.state;

    return <Month days={days} />;
  }
}
