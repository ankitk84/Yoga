import React, { useState, useEffect } from "react";
import Card from "./cards";
import '../css/home.css'
import "../css/cards.css";
import db from "../database.json";

export default function Home(props) {

  return (
    <div className="con">
      <div className="crow">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner crow-img">
            <div className="carousel-item active">
              <img
                src={require("../Images/Y1.jpg")}
                className="d-block w-100 fix"
                alt="..."
              />
            </div>
            <div className="carousel-item crow-img">
              <img
                src={require("../Images/Y2.jpg")}
                className="d-block w-100 fix"
                alt="..."
              />
            </div>
            <div className="carousel-item crow-img">
              <img
                src={require("../Images/Y3.jpg")}
                className="d-block w-100 fix"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div
        className="cards"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <Card
          name={"Tushar Ginotra"}
          image={"https://i.ibb.co/NmLpx9K/Tus.jpg"}
          des={"Captain"}
          inst={"https://www.instagram.com/tushar_since_2000/"}
          email={"tusharginotra2000@gmail.com"}
          linkedin={"https://www.linkedin.com/in/tushar-ginotra-885786197/"}
        />
        <Card
          name={"Rishabh Pandey"}
          image={"https://i.ibb.co/xMtS0pn/Rish.jpg"}
          des={"Vice-Captain"}
          inst={"https://www.instagram.com/rishabhpandey712/"}
          email={"pandeyrishabhanp@gmail.com"}
          linkedin={"https://www.linkedin.com/in/rishabh-pandey-a6b96a245/"}
        />
        <Card
          name={"Anshu Bisht"}
          image={"https://i.ibb.co/vZSR9JD/Ansh.jpg"}
          des={"Girl's Captain"}
          inst={"https://www.instagram.com/bishtanshu149/"}
          email={"bishtanshu2000@gmail.com"}
          linkedin={"https://www.linkedin.com/in/anshu-bisht-1588611a6/"}
        />
      </div>
    </div>
  );
}
