import React from 'react'
import Navbar from './Navbar'
import "./Home.css"
import ImageSlider from './ImageSlider'
import { SliderData } from './sliderData';
import './ImageSlider.css';
import { useState } from "react";
import Modal from '../Modal/Modal';

const Home = () => {

  const [openModal, setOpenModal] = useState(false);

  const [fixedBg, setFixedBg] = useState(false);

  let classAddOrDel = fixedBg ? "setClass" : ""

  const onClick = () => {
    setOpenModal(true);
    setFixedBg(true);
  }

  return <div className={classAddOrDel}>
    <Navbar />
    <section className="section-intro">
    {openModal && <Modal closeModal={setOpenModal} delBckCls={setFixedBg}/>}
      <header>
        <h1>Fooddddie</h1>
      </header>
      <div className="link-to-book-wrapper">
        <button className="link-to-book" href="#reservations" onClick={() => onClick()}>Book a table</button>
      </div>

    </section>

    <section className="about-section">
      <article>
        <h3>
          Section for the text why your restaurant is the best.
        </h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          A quos, voluptatum illum mollitia dolores libero placeat
          nesciunt quasi adipisci impedit!Lorem ipsum dolor sit,
          amet consectetur adipisicing elit.
          A quos, voluptatum illum mollitia dolores libero placeat
          nesciunt quasi adipisci impedit!
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          A quos, voluptatum illum mollitia dolores libero placeat
          nesciunt quasi adipisci impedit!Lorem ipsum dolor sit.
        </p>
      </article>
    </section>

    <ImageSlider slides={SliderData} />

    <div className="container">
      <div className="row-flex">
        <div className="opening-time">
          <h3>
            Opening times
          </h3>
          <p>
            <span>Monday—Thursday: 08:00 — 22:00</span>
            <span>Friday—Saturday: 09:00 — 23:00 </span>
            <span>Sunday: 10:00 — 17:00</span>
          </p>
        </div>
        <div className="contact-adress">
          <h3>
            Contact
          </h3>
          <p>
            <span>000 9283 8456</span>
            <span>15 Florida Ave</span>
            <span>Palo-Alto, 1111 CA</span>
          </p>
        </div>
      </div>
    </div>

    {/* <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script> */}

  </div>
}

export default Home
