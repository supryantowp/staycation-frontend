import React from "react";
import Star from "elements/Star/Star";
import testiFrame from "assets/images/frame.png";
import Button from "elements/Button/Button";
import Fade from "react-reveal/Fade";

export default function Testimony({ data }) {
  return (
    <div>
      <section className="container">
        <Fade>
          <div className="row align-items-center">
            <div
              className="col-md-4 col-sm-12 mb-4"
              style={{ marginRight: 70 }}
            >
              <div
                className="testimonial-hero"
                style={{ margin: `30px 0 0 30px` }}
              >
                <img
                  className="position-absolute"
                  src={data.imageUrl}
                  alt="testimonial"
                  style={{ zIndex: 1 }}
                />
                <img
                  className="position-absolute"
                  src={testiFrame}
                  alt="testimonial"
                  style={{ margin: `-30px 0 0 -30px` }}
                />
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <h4 style={{ marginBottom: 40 }}>{data.name}</h4>
              <Star value={data.rate} width={35} height={35} spacing={4} />
              <h5 className="h2 font-weight-light line-height-2 my-3">
                {data.content}
              </h5>
              <span className="text-gray-500">
                {data.familyName}, {data.familyOccupation}
              </span>
              <div className="">
                <Button
                  className="btn px-5"
                  style={{ marginTop: 40 }}
                  hasShadow
                  isPrimary
                  type="link"
                  href={`/testimonial/${data._id}`}
                >
                  Read Their Story
                </Button>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    </div>
  );
}
