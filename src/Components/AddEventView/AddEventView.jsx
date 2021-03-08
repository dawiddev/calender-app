import Input from "../Input/Input";
import Button from "../Button/Button";
import ScheduleList from '../ScheduleList/ScheduleList'

import React from "react";

export const AddEventView = (props) => {
  const { hour, handleChange, handleSubmit,schedules } = props;
  return (
    <div>
      <h2>{hour}</h2>
      <ScheduleList schedules={schedules}/> 
      <Input handleChange={handleChange} />
      <Button action=" + " handleSubmit={handleSubmit}  />
    </div>
  );
};

export default AddEventView;
