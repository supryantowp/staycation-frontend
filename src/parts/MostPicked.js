import React from "react";
import Fade from "react-reveal/Fade";
import Button from "elements/Button/Button";

export default function MostPicked({ data, refMostPicked }) {
  let card = data.map((item, index) => {
    return (
      <div
        key={index}
        className={`item column-4 ${index === 0 ? "row-2" : "row-1"}`}
      >
        <Fade bottom delay={500 * index}>
          <div className="card card-feature">
            <div className="tag">
              ${item.price}
              <span className="font-weight-light">per {item.unit} </span>
            </div>
            <figure className="img-wrapper">
              <img src={item.imageUrl} alt={item.name} className="img-cover" />
            </figure>
            <div className="meta-wrapper">
              <Button
                className="streched-link d-block text-white"
                type="link"
                href={`/properties/${item._id}`}
              >
                <h5 className="text-gray-900">{item.name}</h5>
              </Button>
              <span>
                {item.city}, {item.country}
              </span>
            </div>
          </div>
        </Fade>
      </div>
    );
  });

  return (
    <div>
      <section className="container" ref={refMostPicked}>
        <Fade bottom>
          <h4 className="mb-3">Most Picked</h4>
          <div className="container-grid">{card}</div>
        </Fade>
      </section>
    </div>
  );
}
