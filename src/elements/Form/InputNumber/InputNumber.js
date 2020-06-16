import React from "react";
import propTypes from "prop-types";

import "./InputNumber.scss";

export default function InputNumber(props) {
  const {
    value,
    placeHolder,
    name,
    min,
    max,
    prefix,
    suffix,
    isSuffixPlural,
  } = props;

  const onChange = (e) => {
    let value = String(e.target.value);

    if (+value <= max && +value >= min) {
      props.onChange({
        target: {
          name: name,
          value: +value,
        },
      });
    }
  };

  const minus = () => {
    value > min &&
      onChange({
        target: {
          name: name,
          value: +value - 1,
        },
      });
  };

  const plus = () => {
    value < max &&
      onChange({
        target: {
          name: name,
          value: +value + 1,
        },
      });
  };

  return (
    <div className={["input-number mb-3", props.outerClassName].join(" ")}>
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text minus" onClick={minus}>
            -
          </span>
        </div>
        <input
          type="text"
          min={min}
          max={max}
          name={name}
          readOnly
          pattern="[0-9]*"
          className="form-control"
          placeholder={placeHolder ? placeHolder : "0"}
          value={`${prefix}${value}${suffix}${
            isSuffixPlural && value > 1 ? "s" : ""
          }`}
          onChange={onChange}
        />
        <div className="input-group-append">
          <span className="input-group-text plus" onClick={plus}>
            +
          </span>
        </div>
      </div>
    </div>
  );
}

InputNumber.defaultProps = {
  value: 1,
  min: 1,
  max: 1,
  prefix: "",
  suffix: "",
};

InputNumber.propTypes = {
  value: propTypes.oneOfType([propTypes.string, propTypes.number]),
  onChange: propTypes.func,
  isSuffixPlural: propTypes.bool,
  placeHolder: propTypes.string,
  outerClassName: propTypes.string,
};
