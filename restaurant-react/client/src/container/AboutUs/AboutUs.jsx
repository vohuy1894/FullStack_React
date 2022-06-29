import React from 'react';
import {images} from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="g letter" />
    </div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about spoon" className="spoon__img"/>
        <p className="p__opensans">French food and cooking are generally considered the backbone and underpinning of many cuisines across the Western world. The influence and recognition of classical French cooking techniques are legendary. This status is precisely why French cuisine can be intimidating for a beginner to learn to prepare in their own kitchen.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>
      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about knife" />
      </div>
      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about spoon" className="spoon__img"/>
        <p className="p__opensans">French food and cooking are generally considered the backbone and underpinning of many cuisines across the Western world. The influence and recognition of classical French cooking techniques are legendary. This status is precisely why French cuisine can be intimidating for a beginner to learn to prepare in their own kitchen.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
