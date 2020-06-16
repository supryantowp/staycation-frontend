import React from "react";
import Fade from "react-reveal/Fade";
import imgHero from "assets/images/img-hero.png";
import frameHero from "assets/images/hero-frame.png";
import ic_cities from "assets/images/icons/ic_cities.svg";
import ic_traveler from "assets/images/icons/ic_traveler.svg";
import ic_treasure from "assets/images/icons/ic_treasure.svg";
import Button from "elements/Button/Button";
import numberFormat from "utils/formatNumber";
import CountUp from "react-countup";

export default function Hero(props) {
  function showMosPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  }

  return (
    <Fade bottom>
      <section className="container pt-4">
        <div className="row align-items-center ">
          <div className="col-md-6 col-sm-12 pr-5" style={{ width: "530px" }}>
            <h1 className="h2 font-weight-bold line-height-1 mb-3">
              Forget get busy work, <br />
              Start next vocation
            </h1>
            <p className="mb-3 font-weight-light text-gray-500 w-75">
              We provide what you need to enjoy your holiday with family. Time
              to make another memorable moments.
            </p>
            <Button
              className="btn px-5"
              hasShadow
              isPrimary
              onClick={showMosPicked}
            >
              Show Me Now
            </Button>
            <div className="row mt-5 icons">
              <div className="col-auto mr-5">
                <img
                  width="36"
                  height="36"
                  src={ic_traveler}
                  alt={`${parseInt(
                    numberFormat(props.data.travelers)
                  )} Travelers`}
                />
                <h6 className="mt-3">
                  <CountUp
                    start={0}
                    end={parseInt(numberFormat(props.data.travelers))}
                    duration={1}
                  />
                  <span className="text-gray-500 font-weight-light">
                    travelers
                  </span>
                </h6>
              </div>
              <div className="col-auto mr-5">
                <img
                  width="36"
                  height="36"
                  src={ic_treasure}
                  alt={`${parseInt(
                    numberFormat(props.data.treasures)
                  )} treasure`}
                />
                <h6 className="mt-3">
                  <CountUp
                    start={0}
                    end={parseInt(numberFormat(props.data.treasures))}
                    duration={1}
                  />
                  <span className="text-gray-500 font-weight-light">
                    treasure
                  </span>
                </h6>
              </div>
              <div className="col-auto mr-5">
                <img
                  width="36"
                  height="36"
                  src={ic_cities}
                  alt={`${parseInt(numberFormat(props.data.cities))} cities`}
                />
                <h6 className="mt-3">
                  <CountUp
                    start={0}
                    end={parseInt(numberFormat(props.data.cities))}
                    duration={1}
                  />
                  <span className="text-gray-500 font-weight-light">
                    cities
                  </span>
                </h6>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-sm-12 pl-5 img-hero">
            <div style={{ width: 520, height: 410 }}>
              <img
                src={imgHero}
                alt="Room with couches"
                className="img-fluid position-absolute"
                style={{ margin: "-30px 0 0 -30px", zIndex: 1 }}
              />
              <img
                src={frameHero}
                alt="Room witch frame"
                className="img-fluid position-absolute"
                style={{ margin: "0 -15px -15px 0" }}
              />
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}
