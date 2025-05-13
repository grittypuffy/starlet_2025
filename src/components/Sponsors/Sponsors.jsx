import "./Sponsors.css";
import foss from "../../assets/logos/foss.png";
import wicys from "../../assets/logos/wicys.png";
import slbs from "../../assets/logos/slbs.png";
import ksum from "../../assets/logos/ksum.png";
import github from "../../assets/logos/github.png";
import tinkerhub from "../../assets/logos/tinkerhub.png";
import cittic from "../../assets/logos/cittic.png";
import aisat from "../../assets/logos/aisat.png";
import pehia from "../../assets/logos/pehia.png";
import c20 from "../../assets/logos/c20.jpg";
import asap from "../../assets/logos/asap.jpeg";
import samagata from "../../assets/logos/samagata.png";

const Sponsors = () => {
  const sponsors = [
    { id: 1, name: "FOSS", logo: foss, url: "https://example.com" },
    { id: 2, name: "WiCyS", logo: wicys, url: "https://example.com" },
    { id: 3, name: "SLBS", logo: slbs, url: "https://example.com" },
    { id: 4, name: "KSUM", logo: ksum, url: "https://example.com" },
    { id: 5, name: "Github", logo: github, url: "https://example.com" },
    { id: 6, name: "Tinkerhub", logo: tinkerhub, url: "https://example.com" },
    { id: 7, name: "Cittic", logo: cittic, url: "https://example.com" },
    { id: 8, name: "Aisat", logo: aisat, url: "https://example.com" },
    { id: 9, name: "Pehia", logo: pehia, url: "https://example.com" },
    { id: 10, name: "Civil 20", logo: c20, url: "https://example.com" },
    { id: 11, name: "asap", logo: asap, url: "https://example.com" },
    { id: 12, name: "Samagata Foundation", logo: samagata, url: "https://example.com" },
  ];

  return (
    <div className="sponsors-section">
      <div className="text-holder sponsors-header">
        <h3>Our Partners</h3>
        <h1>Sponsors</h1>
        <p>Proudly supported by industry leaders</p>
      </div>

      <div className="container sponsors-container">
        {sponsors.map((sponsor) => (
          <a
            key={sponsor.id}
            href={sponsor.url}
            target="_blank"
            rel="noopener noreferrer"
            className="sponsor-card"
          >
            <div className="sponsor-content">
              <img src={sponsor.logo} alt={`${sponsor.name} logo`} className="sponsor-logo" />
              <h3 className="sponsor-name">{sponsor.name}</h3>
              <button className="sponsor-button">Learn More</button>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
