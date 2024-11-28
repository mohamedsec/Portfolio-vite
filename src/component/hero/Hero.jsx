import React from "react";
import "./hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="text">
        <h2>Intro To My Portfolio</h2>
        <img src="/public/user1.png" alt="" className="profile"/>
        <i className='bx bx-star'/>
        <h1>
        "Code. Create. Innovate.<br/>Turning Ideas into Functional Experiences<br/>Building the Future, One Line of Code at a Time"
        </h1>
        <p>
        "Hi, I’m Mohamed Osman, a passionate developer with a knack for turning complex ideas into seamless digital solutions. From crafting dynamic websites to building robust applications, I specialize in creating experiences that are both functional and user-friendly. Let’s build something incredible together!"
        </p>
        <div className="social">
          <i className="bx bxl-facebook socialItem"/>
          <i className="bx bxl-whatsapp socialItem" />
          <i className="bx bxl-linkedin socialItem"/>
          <i className="bx bx-link socialItem"/>
        </div>
      </div>
      <div className="icon">
        <img src="/public/store.png" alt="" className="heroIcon" />
      </div>
    </section>
  );
}

export default Hero;
