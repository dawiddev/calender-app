import React from "react";
import { useHistory } from "react-router-dom";

import Day from "../Day/Day";
import DaysOfTheWeek from "../DaysOfTheWeek/DaysOfTheWeek";
import "./Month.css";

const Month = ({ days }) => {
  let history = useHistory();

  function handleClick(id) {
    history.push(`/date/${id}`);
  }

  return (
    <div>
      <DaysOfTheWeek />
      <div>
        {days.map((day) => (
          <div
            className="date-container"
            key={day.id}
            onClick={() => handleClick(day.id)}
          >
            <Day dayNumber={day.number} key={day.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Month;
