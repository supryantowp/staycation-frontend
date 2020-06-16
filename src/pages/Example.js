import React, { Component } from "react";
import { InputDate, InputNumber } from "elements/Form/Form";
import Breadcrum from "elements/Breadcrum/Breadcrum";

class Example extends Component {
  state = {
    value: {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const BreadcrumList = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "House", pageHref: "house" },
      { pageTitle: "House Detials", pageHref: "" },
    ];

    return (
      <div className="container">
        <div
          className="row align-items-center justify-content-center"
          style={{ height: "100vh" }}
        >
          <div className="col-auto">
            <Breadcrum data={BreadcrumList} />
          </div>
        </div>
      </div>
    );
  }
}

export default Example;
