import React, { useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
import './Homepage.css';
const backgrounds = [
    'https://images.pexels.com/photos/9545683/pexels-photo-9545683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/4635345/pexels-photo-4635345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/4635349/pexels-photo-4635349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
];

const titles = [
  'Online Car Service',
  'We have wide range of vehicle repair services package.',
  'General Car Service, Car Wheel Repair, Car Denting, Car Painting, Car Wash Services Online.',
  'Connect with the World',
];

function Homepage() {
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBackgroundIndex(backgroundIndex => (backgroundIndex + 1) % backgrounds.length);
      setTitleIndex(titleIndex => (titleIndex + 1) % titles.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);
   return (
    <div className="home">
      <div className="navbar">
        <div className="logo">
          <a href="/">KingSRK CarDOC</a>
        </div>
        <div className="login">
        <Link to="/login">|| Login |||</Link>
        <Outlet/>
        </div>
      </div>
      <div
        className="background"
        style={{ backgroundImage: `url(${backgrounds[backgroundIndex]})` }}
      />
      <div className="title-container">
        <h1 className="title">{titles[titleIndex]}</h1>
      </div>
    </div>
  );
}
export default Homepage;
