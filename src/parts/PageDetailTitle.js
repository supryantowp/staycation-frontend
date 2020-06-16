import React from "react";
import Fade from "react-reveal/Fade";
import Breadcrum from "elements/Breadcrum/Breadcrum";

export const PageDetailTitle = ({ data, breadcrumb }) => {
  return (
    <section className="container spacing-sm">
      <Fade bottom>
        <div className="row align-items-center">
          <div className="col">
            <Breadcrum data={breadcrumb} />
          </div>
          <div className="col-auto text-center">
            <h1 className="h2">{data.name}</h1>
            <span className="tet-gray-400">
              {data.city}, {data.country}
            </span>
          </div>
          <div className="col"></div>
        </div>
      </Fade>
    </section>
  );
};
