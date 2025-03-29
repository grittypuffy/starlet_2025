import React from "react";
import "./Timeline.css";

const events = [
  {
    title: "Registration",
    time: "9:00 AM - 10:00 AM",
    description: "Check-in and collect your swags.",
  },
  {
    title: "Opening Ceremony",
    time: "10:00 AM - 11:00 AM",
    description: "Session to get you started.",
  },
  {
    title: "Hacking",
    time: "11:00 AM - 1:00 PM",
    description: "Hacking Session One.",
  },
  {
    title: "Lunch Break",
    time: "1:00 PM - 1:30 PM",
    description: "Enjoy a delicious meal!",
  },
  {
    title: "Hacking Again",
    time: "1:30 PM - 4:00 PM",
    description: "With some games & talks.",
  },
  {
    title: "Snack Time",
    time: "4:00 PM - 4:30 PM",
    description: "Snacky time!",
  },
  {
    title: "Hacking Again",
    time: "4:30 PM - 8:00 PM",
    description: "With more games & talks.",
  },
  {
    title: "Judging & Closing Ceremony",
    time: "8:00 PM - 9:00 PM",
    description: "Winners announcement and closing remarks.",
  },
];

const Timeline = () => {
  return (
    <div id="timeline" className="timeline-container">
      <h2 className="timeline-title">Hackathon Timeline</h2>
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
