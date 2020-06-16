import React from "react";

import propTypes from "prop-types";

import "./Breadcrum.scss";
import Button from "elements/Button/Button";

export default function Breadcrum({ data }) {
  return (
    <nav>
      {/* <ol className={"breadcrumb"}>
        {data.map((item, index) => {
          return (
            <li
              key={`breadcrum-${index}`}
              className={`breadcrum-item ${
                index === data.length - 1 ? "active" : ""
              }`}
            >
              {index === data.length - 1 ? (
                item.pagetitle
              ) : (
                <Button type="link" href={item.pageHref}>
                  {item.pagetitle}
                </Button>
              )}
            </li>
          );
        })}
      </ol> */}

      <ol className="breadcrumb">
        {data.map((item, index) => {
          return (
            <li
              key={`breadcrum-${index}`}
              className={`breadcrumb-item ${
                index === data.length - 1 ? "active" : ""
              }`}
            >
              {index === data.length - 1 ? (
                item.pageTitle
              ) : (
                <Button type="link" href={item.pageHref}>
                  {item.pageTitle}
                </Button>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

Breadcrum.propTypes = {
  data: propTypes.array,
  className: propTypes.string,
};
