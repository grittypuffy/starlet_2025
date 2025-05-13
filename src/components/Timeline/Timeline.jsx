import React from "react";
import "./Timeline.css";

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


const Timeline = () => {
  return (
    <div id="timeline" className="timeline-container">
      <h2 className="timeline-title">Hackathon Duration</h2>
      <div className="timeline-scroll">
        {events.map((event, index) => (
          <div key={index} className="timeline-event-card">
            <h3>{event.title}</h3>
            <p className="timeline-event-time">{event.time}</p>
            <p className="timeline-event-description">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
