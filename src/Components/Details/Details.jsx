import React, { Component } from "react";

// imports react-icons
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer, FaSwimmer, FaWifi, FaTruckPickup, FaPlay, FaPlaystation, FaPhone, FaVoicemail, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

// imports components
import Title from "../Title/Title";

export default class Details extends Component {
  state = {
    details: [
      {
        icon: <FaPhone />,
        title: "Contact numbers",
        info:
          "Mahir Mehta: 6351106090",
      },
      {
        icon: <FaVoicemail />,
        title: "Email",
        info:
          "E-mail id: mahirmehta86@gmail.com",
      },
      {
        icon: <FaLinkedin />,
        title: "Linkedin Page",
        // info:
        //   "Pick up and drop facilitiy will be available.",
      },
      {
        icon: <FaInstagram />,
        title: "Instagram Page",
        // info:
        //   "Playing zone will be there where anyone can play all the major games like cricket, badminton, tennis etc.",
      },
      {
        icon: <FaFacebook />,
        title: "Facebook Page",
        // info:
        //   "Playing zone will be there where anyone can play all the major games like cricket, badminton, tennis etc.",
      },
    ],
  };

  render() {
    return (
      <section className="services">
        <Title title="contact details" />

        <div className="services-center">
          {this.state.details.map((item, index) => {
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
