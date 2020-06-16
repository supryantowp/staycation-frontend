import React from "react";
import { screen } from "@testing-library/dom";
import { render, fireEvent } from "@testing-library/react";
import InputDate from "./InputDate.js";

class TestInput extends React.Component {
  state = {
    value: {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <InputDate
        max={30}
        onChange={this.handleChange}
        name="value"
        value={this.state.value}
      />
    );
  }
}

const setup = () => {
  const { container } = render(<TestInput />);
  const wrapper = container.querySelector(`.input-date`);
  const input = container.querySelector(`input.form-control`);

  return {
    container,
    wrapper,
    input,
  };
};

test("should have wrapper with classname .form-control", () => {
  const { wrapper } = setup();

  expect(wrapper).toBeInTheDocument();
});

test("should have tag <input> and has classname .form-control", () => {
  const { input } = setup();

  expect(input).toBeInTheDocument();
});

test("should show date picker when click input field", () => {
  const { container, input } = setup();

  fireEvent.click(input, { button: 1 });
  const datePickerWrapper = container.querySelector(`.date-range-wrapper`);
  //   screen.debug();

  expect(datePickerWrapper).toBeInTheDocument();
});
