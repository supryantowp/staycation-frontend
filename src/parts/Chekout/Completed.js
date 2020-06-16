import React from "react";
import Fade from "react-reveal/Fade";
import imageCompleted from "assets/images/completed.png";

export default function Completed(props) {
  return (
    <Fade>
      <div className="container mb-3">
        <div className="row justify-content-center text-center">
          <div className="col-4">
            <img
              src={imageCompleted}
              alt="ilustration completed"
              className="img-fluid"
            />
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis suscipit commodi sunt est repudiandae consequatur
              nihil delectus, velit quasi repellendus?
            </p>
          </div>
        </div>
      </div>
    </Fade>
  );
}
