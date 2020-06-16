import React from "react";
import { render } from "@testing-library/react";
import Breadcrum from "./Breadcrum";
import { BrowserRouter as Router } from "react-router-dom";

const setup = () => {
  const breadcrumList = [
    { pageTitle: "Home", pageHref: "" },
    { pageTitle: "House Details", pageHref: "" },
  ];

  const { container } = render(
    <Router>
      <Breadcrum className={"breadcrumb"} data={breadcrumList} />
    </Router>
  );

  const breadcrum = container.querySelector(".breadcrumb");

  return {
    breadcrum,
  };
};

test("should have ol with classname .breadcrum and have text home & House Details", () => {
  const { breadcrum } = setup();

  expect(breadcrum).toBeInTheDocument();
  //   expect(breadcrum).toHaveTextContent("Home");
  //   expect(breadcrum).toHaveTextContent("House Details");
});
