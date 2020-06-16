import React, { Component } from "react";
import Header from "parts/Header";
import { PageDetailTitle } from "parts/PageDetailTitle";
import FeaturedImage from "parts/FeaturedImage";

import ItemDetails from "json/itemDetails.json";
import DetailsDescription from "parts/DetailsDescription";
import BookingForm from "parts/BookingForm";
import Categories from "parts/Categories";
import Testimony from "parts/Testimony";
import Footer from "parts/Footer";

export default class DetailsPage extends Component {
  componentDidMount() {
    window.title = "Staycation | Details Page";
    window.scrollTo(0, 0);
  }

  render() {
    const breadcrumb = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "House Details", pageHref: "" },
    ];

    return (
      <div>
        <Header {...this.props} />
        <PageDetailTitle breadcrumb={breadcrumb} data={ItemDetails} />
        <FeaturedImage data={ItemDetails.imageUrls} />
        <section className="container">
          <div className="row">
            <div className="col-7 pr-5">
              <DetailsDescription data={ItemDetails} />
            </div>
            <div className="col-5">
              <BookingForm itemDetails={ItemDetails} />
            </div>
          </div>
        </section>

        <Categories data={ItemDetails.categories} />
        <Testimony data={ItemDetails.testimonial} />
        <Footer />
      </div>
    );
  }
}
