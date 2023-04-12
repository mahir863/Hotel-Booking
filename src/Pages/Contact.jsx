import React from "react";
// import react-router-dom
import { Link } from "react-router-dom";
import Banner from "../Components/Banner/Banner";
// import FeaturedRooms from "../Components/FeaturedRooms/FeaturedRooms";
// imports components
import Hero from "../Components/Hero/Hero";
import Details from "../Components/Details/Details";

function Contact() {
  return (
    <>
      <Hero>
        <Banner
          title="Contact Us"
          subtitle="Feel free to disturb us at any time"
        >
          {/* <Link to="/services" className="btn-primary">
            our details
          </Link> */}
        </Banner>
      </Hero>
      <Details />
      {/* <FeaturedRooms /> */}
    </>
  );
}

export default Contact;
