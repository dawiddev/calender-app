import React, { Component } from "react";
import TodayDate from "../TodayDate/TodayDate";
import EventList from "../EventList/EventList";

export default class ScheduleForTheDay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scheduleData: {
        id: 1,
        events: {
          times: {
            "00:00": ["a"],
            "01:00": ["c"],
            "02:00": ["d"],
            "03:00": [],
            "04:00": [],
            "05:00": [],
            "06:00": [],
            "07:00": [],
            "08:00": [],
            "09:00": [],
            "10:00": [],
            "11:00": [],
            "12:00": [],
            "13:00": [],
            "14:00": [],
            "15:00": [],
            "16:00": [],
            "17:00": [],
            "18:00": [],
            "19:00": [],
            "20:00": [],
            "21:00": [],
            "22:00": [],
            "23:00": [],
          },
        },
      },
    };
  }

  render() {
    return (
      <div>
        <TodayDate />
        <EventList schedule={this.state.scheduleData} />
      </div>
    );
  }
}
