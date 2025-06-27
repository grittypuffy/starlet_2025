import React from "react";
import "./Overview.css";

const events = [
  {
    title: "During the day!",
    time: "9:00 AM – 5:00 PM",
    description: "Hack Smarter, Not Longer",
  },
  {
    title: "For Two Days!",
    time: "Enough time!",
    description: "Celebrate what you created — not how long you stayed up.",
  },
  {
    title: "No All-Nighters",
    time: "Built-In Balance",
    description: "We end at 5 PM so you can enjoy your evening",
  },
  {
    title: "Wellness Wins",
    time: "Mind > Machine",
    description: "Studies show rest improves creativity and decision-making",
  },
  {
    title: "Team Time",
    time: "All Hours",
    description: "Collaborate, bounce ideas, and build",
  },
  {
    title: "Snack Sustainably",
    time: "Throughout the Day",
    description: "Fuel your brain with good food and hydration",
  },
];


const overview = () => {
  return (
    <div id="overview" className="overview-container">
      <h2 className="overview-title">Hackathon Overview</h2>
      <div className="overview-scroll">
        {events.map((event, index) => (
          <div key={index} className="overview-event-card">
            <h3>{event.title}</h3>
            <p className="overview-event-time">{event.time}</p>
            <p className="overview-event-description">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default overview;
