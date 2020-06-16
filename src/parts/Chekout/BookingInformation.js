import React from "react";
import Fade from "react-reveal/Fade";
import InputText from "elements/Form/InputText/InputText";

export default function BookingInformation(props) {
  const { data, itemDetails, chekout } = props;
  console.log(data.lastName);
  return (
    <Fade>
      <div className="container mb-3">
        <div className="row justify-content-center align-items center">
          <div className="col-5 border-right py-5" style={{ paddingRight: 80 }}>
            <Fade delay={300}>
              <div className="card">
                <figure className="img-wrapper" style={{ height: 270 }}>
                  <img
                    src={itemDetails.imageUrls[0].url}
                    alt={itemDetails.name}
                    className="img-cover"
                  />
                </figure>
                <div className="row align-items-center">
                  <div className="col">
                    <div className="meta-wrapper">
                      <h5>{itemDetails.name}</h5>
                      <span className="text-gray-500">
                        {itemDetails.city}, {itemDetails.country}
                      </span>
                    </div>
                  </div>
                  <div className="col-auto">
                    <span>
                      ${+chekout.duration + itemDetails.price} USD
                      <span className="text-gray-500"> per </span>
                      {chekout.duration} {itemDetails.unit}
                      {+chekout.duration > 1 ? "s" : ""}
                    </span>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
          <div className="col-5 py-5" style={{ paddingLeft: 80 }}>
            <Fade delay={600}>
              <label htmlFor="firstname">First Name</label>
              <InputText
                id="firstName"
                name="firstName"
                type="text"
                value={data.firstName}
                onChange={props.onChange}
              />

              <label htmlFor="lastname">Last Name</label>
              <InputText
                id="lastname"
                name="lastName"
                type="text"
                value={data.lastName}
                onChange={props.onChange}
              />

              <label htmlFor="email">Email</label>
              <InputText
                id="email"
                name="email"
                type="email"
                value={data.email}
                onChange={props.onChange}
              />

              <label htmlFor="phone">Phone Number</label>
              <InputText
                id="phone"
                name="phone"
                type="tel"
                value={data.phone}
                onChange={props.onChange}
              />
            </Fade>
          </div>
        </div>
      </div>
    </Fade>
  );
}
