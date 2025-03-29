import { useState, useEffect, useRef } from 'react';
import './EventDetails.css';

function EventDetails() {
  const eventDate = new Date("2025-05-01T00:00:00");
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const elementsRef = useRef([]);

  function calculateTimeLeft() {
    const now = new Date();
    const difference = eventDate - now;
    if (difference <= 0) return { days: "00", hours: "00", minutes: "00", seconds: "00" };

    return {
      days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, '0'),
      hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
      minutes: String(Math.floor((difference / (1000 * 60)) % 60)).padStart(2, '0'),
      seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, '0'),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Scroll animation logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.3 }
    );

    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div id="eventdetails" className="eventdetails-container">
      <div className="container">
        <div className="card event-details slide-in-left" ref={(el) => elementsRef.current.push(el)}>
          <h1>Event Details</h1>
          <p>Date: 06 April 2025</p>
          <p>Place: ASAP Skill Park</p>
          <p>Time: 6th 10:00 to 7th 14:00</p>
        </div>

        <div className="card countdown-card slide-in-right" ref={(el) => elementsRef.current.push(el)}>
          <h1>Countdown to Hackathon</h1>
          <div className="countdown">
            <span>{timeLeft.days}</span> :
            <span>{timeLeft.hours}</span> :
            <span>{timeLeft.minutes}</span> :
            <span>{timeLeft.seconds}</span>
          </div>
        </div>

        <div className="card event-content slide-in-left" ref={(el) => elementsRef.current.push(el)}>
          <p>
            Starlet is an inclusive hackathon exclusively for women and other gender minorities, bringing out the best in them.
            It facilitates meaningful connections and boosts the confidence of participants, creating a safe space for learning, networking, and teamwork.
          </p>
          <p>See brochure <a href="#">here</a>.</p>
        </div>
      </div>

      <div className="mission container">
        <div className="mission-card slide-in-bottom" ref={(el) => elementsRef.current.push(el)}>
          <p>
            This inclusive hackathon empowers communities. Meals made by local housewives add a vibrant touch, showcasing their culinary skills.
            It welcomes people from all academic backgrounds, celebrating their innovation alongside peers.
          </p>
        </div>

        <div className="mission-card slide-in-bottom" ref={(el) => elementsRef.current.push(el)}>
          <p>
            Mind Empowered (ME) is a charitable organization based in India.
            It is the brainchild of Maya Menon and her sister - two sisters who resonate positivity and happiness wherever they go.
            The sisters realized there was a strong need to eliminate stigma associated with mental illness from our society.
            Hence, the idea of an open forum to help the students came to life by forming "ME".
          </p>
        </div>
      </div>
    </div>
  );
}

export default EventDetails;
