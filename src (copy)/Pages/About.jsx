import React from 'react'
import './About.css'
import Header from '../Components/Header'

const About = () => {
  return (
    <div>
      <Header />

      <section className="about-us">
        <div className="about">
          <img src="../Images/about.png" alt='pic' className="pic" />
          <div className="text">
            <h2>About Us</h2>
            <h5>Front-end Developer & <span>Designer</span></h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita natus ad sed harum itaque ullam enim quas, veniam accusantium, quia animi id eos adipisci iusto molestias asperiores explicabo cum vero atque amet corporis! Soluta illum facere consequuntur magni. Ullam dolorem repudiandae cumque voluptate consequatur consectetur, eos provident necessitatibus reiciendis corrupti!</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About