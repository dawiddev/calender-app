import React, { Component } from "react";
import { BrowserRouter as Link } from "react-router-dom";
// import Cal from "../Old cal/cal";

import PropTypes from "prop-types";

class Day extends Component {
  render() {
    const { dayNumber } = this.props;
    return (
      <div>
        <Link to={`/date`} style={{ textDecoration: "none", color: "inherit" }}>
          <h2>{dayNumber}</h2>
        </Link>
      </div>
    );
  }
}

Day.propTypes = {
  dayNumber: PropTypes.number,
};

export default Day;
