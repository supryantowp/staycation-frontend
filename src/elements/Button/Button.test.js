import React from "react";
import { render } from "@testing-library/react";
import Button from "./Button.js";
import { BrowserRouter as Router } from "react-router-dom";

test("should not allowed click button if isDisable is present", () => {
  const { container } = render(<Button isDisabled></Button>);

  expect(container.querySelector("span.disabled")).toBeInTheDocument();
});

test("should render loading/spinnger", () => {
  const { container, getByText } = render(<Button isLoading></Button>);

  expect(getByText(/loading/i)).toBeInTheDocument();
  expect(container.querySelector("span")).toBeInTheDocument();
});

test("should render tag <a>", () => {
  const { container } = render(<Button type="link" isExternal></Button>);

  expect(container.querySelector("a")).toBeInTheDocument();
});

test("should render tag <link>", () => {
  const { container } = render(
    <Router>
      <Button type="link" href="mmam"></Button>
    </Router>
  );

  expect(container.querySelector("a")).toBeInTheDocument();
});
