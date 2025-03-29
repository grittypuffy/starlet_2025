import React from "react";
import "./Prizes.css";

const Prizes = () => {
  return (
    <div id="prizes" className="prizes-container">
      <h2 className="prizes-title">Hackathon Prizes</h2>
      <div className="prizes-cards">
        <div className="prize-card first">
          <h3>🥇</h3>
          <p>₹10,000</p>
        </div>
        <div className="prize-card second">
          <h3>🥈</h3>
          <p>₹ 7,000</p>
        </div>
        <div className="prize-card third">
          <h3>🥉</h3>
          <p>₹ 5,000</p>
        </div>
      </div>
    </div>
  );
};

export default Prizes;
