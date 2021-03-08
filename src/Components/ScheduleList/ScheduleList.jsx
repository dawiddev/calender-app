import React from "react";

const  ScheduleList = (props) => {
  const { schedules } = props;
  return (
    <div>
      <ul>
        {schedules.map((schedule) => (
          <li key={schedule.id}>{schedule.input}</li>
        ))}
      </ul>
    </div>
  );
};

export default ScheduleList