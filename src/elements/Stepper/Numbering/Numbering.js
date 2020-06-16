import React from "react";
import propTypes from "prop-types";
import Fade from "react-reveal/Fade";
import "./Numbering.scss";

export default function Numbering({ style, className, data, current }) {
  const KeysOfData = Object.keys(data);

  return (
    <Fade>
      <ol className={["stepper", className].join(" ")} style={style}>
        {KeysOfData.map((item, index) => {
          let isActive = item === current ? "active" : "";
          if (index + 1 === KeysOfData.length) {
            isActive = "";
            return null;
          }

          return (
            <li key={`list-${index}`} className={[isActive].join(" ")}>
              {index + 1}
            </li>
          );
        })}
      </ol>
    </Fade>
  );
}

Numbering.propTypes = {
  className: propTypes.string,
  data: propTypes.object,
  current: propTypes.string,
};
