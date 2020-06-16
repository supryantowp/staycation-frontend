import React, { Component } from "react";
import Header from "parts/Header";
import landingPage from "../json/landingPage.json";
import Hero from "parts/Hero";
import MostPicked from "parts/MostPicked";
import Categories from "parts/Categories";
import Testimony from "parts/Testimony";
import Footer from "parts/Footer";

export default class LandingPage extends Component {
  state = {
    refMostPicked: React.createRef(),
  };

  render() {
    return (
      <>
        <Header {...this.props}></Header>
        <Hero
          data={landingPage.hero}
          refMostPicked={this.state.refMostPicked}
        />
        <MostPicked
          refMostPicked={this.state.refMostPicked}
          data={landingPage.mostPicked}
        />
        <Categories data={landingPage.categories} />
        <Testimony data={landingPage.testimonial} />
        <Footer />
      </>
    );
  }
}
