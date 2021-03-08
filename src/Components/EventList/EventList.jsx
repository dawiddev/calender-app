import EventItem from "../EventItem/EventItem";
import React from "react";

 const EventList = (props) => {
  const { schedule, handleChange, handleSubmit } = props;

  const times = schedule.events.times;

  const hours = Object.keys(times).sort();

  const timeSchedule = Object.values(times)
  
  // console.log(timeSchedule)

  return (
    <div>
      {hours.map((hour) => (
        <EventItem
          time={hour}
          key={hour}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          timeSchedule = {timeSchedule}
        />
      ))}
    </div>
  );
};

export default EventList;
