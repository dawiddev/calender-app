import React, { Component } from "react";
import EditEventView from "../EditEventView/EditEventView";
import AddEventView from "../AddEventView/AddEventView";

export default class EventItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
      schedules: [],
      input: "",
    };
  }

  // handleView = () => {
  //   this.setState({
  //     editing: !this.state.editing,
  //   });
  // };

  handleChange = (event) => {
    this.setState({
      input: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const isEmpty = this.state.input.length === 0;
    if (isEmpty) {
      return;
    }

    const newSchedule = {
      input: this.state.input,
      id: Date.now(),
    };

    this.setState((state) => ({
      schedules: state.schedules.concat(newSchedule),
      input: "",
      editing: !state.editing,
    }));
  };

  render() {
    const { editing, schedules } = this.state;
    const { time } = this.props;

    const renderedComponent = editing ? (
      <EditEventView
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        hour={time}
        schedules={schedules}
      />
    ) : (
      <AddEventView
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        hour={time}
        schedules={schedules}
      />
    );

    return <div>{renderedComponent}</div>;
  }
}
