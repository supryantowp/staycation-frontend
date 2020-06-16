import React from "react";
import propTypes from "prop-types";
import "./Star.scss";

export default function Star({ className, value, height, width, spacing }) {
  const decimals = value % 1;
  const start = [];
  let leftPos = 0;

  for (let index = 0; index < 5 && index < value - decimals; index++) {
    leftPos = leftPos + width;
    start.push(
      <div
        className="star"
        key={`star-${index}`}
        style={{
          left: index * width,
          height: height,
          width: width,
          marginRight: spacing,
        }}
      ></div>
    );
  }

  if (decimals > 0 && value <= 5) {
    start.push(
      <div
        className="star"
        key={`starWithDecimals`}
        style={{
          leftPos: leftPos,
          height: height,
          width: decimals * width - spacing,
        }}
      ></div>
    );
  }

  const starPlaceHolder = [];

  for (let index = 0; index < 5; index++) {
    start.push(
      <div
        key={`starPlaceHolder-${index}`}
        className="star placeholder"
        style={{
          left: index * width,
          height: height,
          width: width,
          marginRight: spacing,
        }}
      ></div>
    );
  }

  return (
    <div>
      <div
        className={["stars", className].join(" ")}
        style={{ height: height }}
      >
        {start}
        {starPlaceHolder}
      </div>
    </div>
  );
}

Star.propTypes = {
  className: propTypes.string,
  value: propTypes.number,
  width: propTypes.number,
  height: propTypes.number,
  spacing: propTypes.number,
};
