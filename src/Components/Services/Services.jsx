import React, { Component } from "react";

// imports react-icons
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer, FaSwimmer, FaWifi, FaTruckPickup, FaPlay, FaPlaystation } from "react-icons/fa";

// imports components
import Title from "../Title/Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaWifi />,
        title: "free Wifi",
        info:
          "Full speed free wifi facility will be provided in the hotel.",
      },
      {
        icon: <FaSwimmer />,
        title: "Swimming Pool",
        info:
          "lavish level swimming pool facility is available with shower rooms.",
      },
      {
        icon: <FaTruckPickup />,
        title: "free pick up and drop",
        info:
          "Pick up and drop facilitiy will be available.",
      },
      {
        icon: <FaPlaystation />,
        title: "Play Zone",
        info:
          "Playing zone will be there where anyone can play all the major games like cricket, badminton, tennis etc.",
      },
    ],
  };

  render() {
    return (
      <section className="services">
        <Title title="services" />

        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="services">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
