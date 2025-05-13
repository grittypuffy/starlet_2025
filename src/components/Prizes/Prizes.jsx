import React from "react";
import "./Prizes.css";

const Prizes = () => {
  return (
    <div id="prizes" className="prizes-container">
      <h2 className="prizes-title">Hackathon Prizes</h2>
      <div className="prizes-cards">
        <div className="prize-card first">
          <h3>🥇🥈🥉</h3>
          <p>₹40,000</p>
          <p>Divided Among Exciting Tracks.</p>
        </div>
      </div>
    </div>
  );
};

export default Prizes;
