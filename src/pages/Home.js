import React from 'react';
import './Home.css';
import activity1 from '../images/activity1.jpg';
import activity2 from '../images/activity2.jpg';
import activity3 from '../images/activity3.jpg';
import activity4 from '../images/activity4.jpg';
import activity5 from '../images/activity5.jpg';
import activity6 from '../images/activity6.jpg';


function Home() {
  return (
    <div className="home">
      <h1>Welcome to Our Non-Profit</h1>
      <p>Making the world a better place.
      A nonprofit organisation is subject to the non-distribution constraint: 
      any revenues that exceed expenses must be committed to the organization's purpose, 
      not taken by private parties. 
      </p>
      <div className="image-gallery">
        <img src={activity1} alt="Activity 1" />
        <img src={activity2} alt="Activity 2" />
        <img src={activity3} alt="Activity 3" />
        <img src={activity4} alt="Activity 4" />
        <img src={activity5} alt="Activity 5" />
        <img src={activity6} alt="Activity 6" />
      </div>
    </div>
  );
}

export default Home;
