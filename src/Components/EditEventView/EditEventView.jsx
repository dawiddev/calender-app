import React from "react";
import Input from "../Input/Input";
import Button from '../Button/Button'
import ScheduleList from '../ScheduleList/ScheduleList'

 const EditEventView = (props) => {
   const { handleSubmit, handleChange, hour,  schedules } = props
  return (
    <div>
  <h2>{hour}</h2>
      <ScheduleList schedules={schedules}/> 
      <Input handleChange={handleChange} />
      <Button action=" update "  handleSubmit={handleSubmit} />
    </div>
  );
};

export default EditEventView