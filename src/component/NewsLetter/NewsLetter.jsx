import React from "react";
import "./NewsLetter.css";
const NewsLetter = () => {
  return (
    <div className="newsletter">
      <h1>Get Your Exclusive Offer On Your Email</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <div>
        <input type="email" placeholder="Enter your email id" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
