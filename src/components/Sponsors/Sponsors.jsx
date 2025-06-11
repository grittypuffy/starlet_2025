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

import lenientTree from "../../assets/logos/outreach/lenientTree.jpg";
import ravyn from "../../assets/logos/outreach/ravyn.png";
import sahrdaya from "../../assets/logos/outreach/sahrdaya.png";
import knowlumi from "../../assets/logos/outreach/knowlumi.png";

import carestack from "../../assets/logos/current/carestack.svg";
import samagataCurrent from "../../assets/logos/current/samagata.png";
import kango from "../../assets/logos/current/kango.png";

import srbd from "../../assets/logos/venue/gujarati_college.jpg"; 

const Sponsors = () => {
  const sponsors = [
    { id: 1, name: "Care Stack", logo: carestack, url: "https://carestack.com/", description: `` },
    { id: 2, name: "Kango Ventures", logo: kango, url: "https://example.com/", description: `` },
    { id: 3, name: "Samagata Foundation", logo: samagataCurrent, url: "https://samagata.org/", description: `` },
    { id: 4, name: "WiCyS", logo: wicys, url: "https://wicys.org" },
  ]

  const venuePartner = [
    { id: 1, name: "Seth Ram Bahadur Singh Gujarati College", logo: srbd, url: "https://www.cochingujaratimahajan.com/#modal-one/", description: `` },
  ]


  const outreachPartners = [
    { id: 1, name: "Ravyn Company", logo: ravyn, url: "https://www.ravyncorp.com/", description: `` },
    { id: 2, name: "IEEE Sahrdaya", logo: sahrdaya, url: "https://ieeesahrdaya.com/", description: `` },
    { id: 3, name: "KnowLumi", logo: knowlumi, url: "https://www.knowlumi.com/", description: `` },
    { id: 4, name: "Lenient Tree", logo: lenientTree, url: "https://lenienttree.com/", description: `` },
  ]

  const previousSponsors = [
    { id: 1, name: "FOSS United", logo: foss, url: "https://fossunited.org" },
    { id: 2, name: "SLBS Marklance", logo: slbs, url: "https://slbsmarklance.com/" },
    { id: 3, name: "Kerala Startup Mission", logo: ksum, url: "https://startupmission.kerala.gov.in/" },
    { id: 4, name: "GitHub", logo: github, url: "https://github.com" },
    { id: 5, name: "Tinkerhub Foundation", logo: tinkerhub, url: "https://tinkerhub.org" },
    { id: 6, name: "CITTIC", logo: cittic, url: "https://cittic.cusat.ac.in/" },
    { id: 7, name: "Aisat", logo: aisat, url: "https://aisat.ac.in/" },
    { id: 8, name: "Pehia Foundation", logo: pehia, url: "https://pehia.org/" },
    { id: 9, name: "Civil India 20 (part of G20)", logo: c20, url: "https://c20.amma.org/" },
    { id: 10, name: "ASAP Community Skill Park", logo: asap, url: "https://csp.asapkerala.gov.in/" },
    { id: 11, name: "Samagata Foundation", logo: samagata, url: "https://samagata.org" },
  ];

  return (
    <div className="sponsors-section">
      <div className="text-holder sponsors-header">
        <h1>Sponsors and Partners</h1>
        <p>Interested in sponsoring us? Check our&nbsp;
          <a
            href="/sponsorship-deck.pdf" target="_blank"
            rel="noopener noreferrer"
            style={{color: "inherit"}}
          >
            sponsorship deck
          </a>
        </p>
      </div>

      <div className="text-holder sponsors-header">
        <h3>Sponsors</h3>
      </div>

      <div className="container sponsors-container">
        {sponsors.map((partner) => (
          <a
            key={partner.id}
            href={partner.url}
            target="_blank"
            rel="noopener noreferrer"
            className="sponsor-card"
          >
            <div className="sponsor-content">
              <img src={partner.logo} alt={`${partner.name} logo`} className="sponsor-logo" />
              <h3 className="sponsor-name">{partner.name}</h3>
            </div>
          </a>
        ))}
      </div>

      <div className="text-holder sponsors-header">
        <h3>Venue Partner</h3>
      </div>

      <div className="container sponsors-container">
        {venuePartner.map((partner) => (
          <a
            key={partner.id}
            href={partner.url}
            target="_blank"
            rel="noopener noreferrer"
            className="sponsor-card"
          >
            <div className="sponsor-content">
              <img src={partner.logo} alt={`${partner.name} logo`} className="sponsor-logo" />
              <h3 className="sponsor-name">{partner.name}</h3>
            </div>
          </a>
        ))}
      </div>

      <div className="text-holder sponsors-header">
        <h3>Outreach Partners</h3>
      </div>

      <div className="container sponsors-container">
        {outreachPartners.map((partner) => (
          <a
            key={partner.id}
            href={partner.url}
            target="_blank"
            rel="noopener noreferrer"
            className="sponsor-card"
          >
            <div className="sponsor-content">
              <img src={partner.logo} alt={`${partner.name} logo`} className="sponsor-logo" />
              <h3 className="sponsor-name">{partner.name}</h3>
            </div>
          </a>
        ))}
      </div>

      <div className="text-holder sponsors-header">
        <h3>Previous Sponsors and Partners</h3>
      </div>

      <div className="container sponsors-container">
        {previousSponsors.map((sponsor) => (
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
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
