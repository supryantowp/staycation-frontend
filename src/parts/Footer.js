import React from "react";
import IconText from "./IconText";
import Button from "elements/Button/Button";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col">
            <IconText />
            <p className="brand-tagline">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              iusto nisi commodi quaerat rem aliquid vitae labore, corrupti
              earum. At?
            </p>
          </div>
          <div className="col-2 mr-5">
            <h6 className="mt-2">For Beginers</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/register">
                  New Account
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/properties">
                  Start Booking
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/use-payments">
                  Use Payments
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-2 mr-5">
            <h6 className="mt-2">Explore Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/">
                  Our Carres
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/">
                  Privacy
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/-payments">
                  Terms and Conditions
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-4">
            <h6 className="mt-2">Connect Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button
                  isExternal
                  type="link"
                  href="mailto:supryantowp21@gmail.com"
                >
                  supryantowp21@gmail.com
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="tel:+6289660704298">
                  +6289660704298
                </Button>
              </li>
              <li className="list-group-item">
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis.
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col text-center copyright">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi!
          </div>
        </div>
      </div>
    </footer>
  );
}
