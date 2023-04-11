import React, { useState, useEffect } from "react";
import Card from "./cards";
import "../css/home.css";
import "../css/cards.css";
import db from "../data/database.json";

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
                src={"https://i.ibb.co/4Rd8zZ5/c1.jpg"}
                className="d-block w-100 fix"
                alt="..."
              />
            </div>
            <div className="carousel-item crow-img">
              <img
                src={"https://i.ibb.co/fFqFCMk/c2jpg-1.jpg"}
                className="d-block w-100 fix"
                alt="..."
              />
            </div>
            <div className="carousel-item crow-img">
              <img
                src={"https://i.ibb.co/9Ncr0Lb/c3.jpg"}
                className="d-block w-100 fix"
                alt="..."
              />
            </div>
            <div className="carousel-item crow-img">
              <img
                src={"https://i.ibb.co/4NnFfGX/c6.jpg"}
                className="d-block w-100 fix"
                alt="..."
              />
            </div>
            <div className="carousel-item crow-img">
              <img
                src={"https://i.ibb.co/zrvyTMT/c4-JPG-1.jpg"}
                className="d-block w-100 fix"
                alt="..."
              />
            </div>
            <div className="carousel-item crow-img">
              <img
                src={"https://i.ibb.co/92xM31B/c5-1.jpg"}
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
      <div className="homeContent">
        <h1>
          "Yoga is the journey of the self, to the self, through the self"
        </h1>
        <h5 className="content1">
          Welcome to the official website of the Yoga Team at NIT Kurukshetra!
        </h5>
        <p className="content2">
          Yoga connects body, mind and soul. It helps not only in achieving good
          health but also in gaining inner peace and becoming self-aware. We
          YogaTeam, NIT Kurukshetra are one of the torch bearers of this ancient
          culture. We conduct regular yoga sessions and work towards inculcating
          its habit in the students. We perform on various occasions, like
          national festivals and International Yoga Day. We showcase our
          competence in tournaments like INTER-NIT and ITUSA. Our team is
          dedicated to promoting the practice and benefits of yoga within our
          college community and beyond. Led by our mentor, Mrs Rita Saini, we
          strive to create a welcoming and inclusive environment where anyone
          can explore and deepen their yoga practice. Our team is made up of
          passionate yoga enthusiasts who come from a variety of backgrounds and
          skill levels. Whether you're a seasoned yogi or just starting out, we
          invite you to join us for our regular yoga classes, workshops, and
          events.<br/>
           At the Yog Team, we believe that yoga is not just a physical
          practice, but also a way to cultivate mindfulness, self-awareness, and
          compassion. Our classes focus on creating a safe space where students
          can connect with their breath, quiet their minds, and tap into their
          inner strength and wisdom. In addition to our regular classes, we also
          offer specialized workshops and events throughout the year. These may
          include guest teacher workshops, retreats, community service projects,
          and more. We're always exploring new ways to bring the benefits of
          yoga to our community. We invite you to explore our website to learn
          more about our team, our mentor, and our offerings. If you have any
          questions or would like to join us for a class, please don't hesitate
          to reach out. We look forward to seeing you on the mat!
        </p>
      </div>
      <div className="mentor">
        <div className="heading">
          <h2>Our Mentor</h2>
        </div>
        <div className="about">
          <div className="menImg">
            <img
              className="mimg"
              src="https://i.ibb.co/NmLpx9K/Tus.jpg"
              alt=""
            />
            <p className="mentorName">Mrs Rita</p>
          </div>
          <div className="mentorContent">
            <p>
              Mrs. Rita Saini is a highly experienced and dedicated yoga
              instructor who has been teaching yoga at NIT Kurukshetra for many
              years. Her passion for yoga and holistic wellness has inspired
              countless students to develop a regular yoga practice and lead
              healthier, more balanced lives. She believes that yoga is not just
              a physical practice, but a way of life that can help individuals
              achieve greater mental, emotional, and spiritual well-being. Mrs.
              Saini has helped many students overcome physical challenges,
              reduce stress and anxiety, and achieve greater balance and harmony
              in their lives. Her dedication to her students and her passion for
              yoga make her a highly respected and beloved figure in the NIT
              Kurukshetra community.
            </p>
          </div>
        </div>
      </div>
      <div className="cards" style={{ display: "flex", flexDirection: "row" }}>
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

      <iframe
      className="video"
        width="590"
        height="345"
        src="https://www.youtube.com/embed/QBKZsPegQ9w"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
  );
}
