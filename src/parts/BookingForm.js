import React, { Component } from "react";

import propTypes from "prop-types";
import { InputNumber, InputDate } from "elements/Form/Form";
import Button from "elements/Button/Button";

export default class BookingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        duration: 1,
        date: {
          startDate: new Date(),
          endDate: new Date(),
          key: "selection",
        },
      },
    };
  }

  updateDate = (event) => {
    this.setState({
      ...this.state,
      data: {
        ...this.state.data,
        [event.target.name]: event.target.value,
      },
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const { data } = this.state;

    if (prevState.data.date !== data.date) {
      const startDate = new Date(data.date.startDate);
      const endDate = new Date(data.date.endDate);
      const coundDuration = new Date(endDate - startDate).getDate();

      this.setState({
        data: {
          ...this.state.data,
          duration: coundDuration,
        },
      });
    }

    if (prevState.data.duration !== data.duration) {
      const startDate = new Date(data.date.startDate);
      const endDate = new Date(
        startDate.setDate(startDate.getDate() + +data.duration - 1)
      );
      this.setState({
        ...this.state,
        data: {
          ...this.state.data,
          date: {
            ...this.state.data.date,
            endDate: endDate,
          },
        },
      });
    }
  }

  render() {
    const { data } = this.state;
    const { itemDetails, startBooking } = this.props;

    return (
      <div className="card bordered" style={{ padding: "60px 80px" }}>
        <h4 className="mb-3">Start Booking</h4>
        <h5 className="h2 text-teal mb-4">
          ${itemDetails.price} {""}
          <span className="text-gray-500 font-weight-light">
            per {itemDetails.unit}
          </span>
        </h5>
        <label htmlFor="duration">How long you will stay?</label>
        <InputNumber
          max={30}
          isSuffixPlural
          suffix={" night"}
          onChange={this.updateDate}
          name="duration"
          value={data.duration}
        />
        <label htmlFor="date">Pick a date</label>
        <InputDate onChange={this.updateDate} name="date" value={data.date} />
        <h6
          className="text-gray-500 font-weight-light"
          style={{ marginBottom: 40 }}
        >
          You will pay {""}
          <span className="text-gray-900">
            ${itemDetails.price + data.duration} USD
          </span>{" "}
          per{" "}
          <span className="text-gray-900">
            {data.duration} {itemDetails.unit}
          </span>
        </h6>

        <Button className="btn" isPrimary isBlock onClick={startBooking}>
          Continue to book
        </Button>
      </div>
    );
  }
}

BookingForm.propTypes = {
  itemDetails: propTypes.object,
  startBooking: propTypes.func,
};
