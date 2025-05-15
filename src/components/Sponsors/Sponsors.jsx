import "./Sponsors.css"

const Sponsors = () => {
  // Sample sponsor data - replace with your actual sponsors
  const sponsors = [
    { id: 1, name: "Sponsor 1", logo: "https://picsum.photos/100/100", url: "https://example.com" },
    { id: 2, name: "Sponsor 2", logo: "https://picsum.photos/100/100", url: "https://example.com" },
    { id: 3, name: "Sponsor 3", logo: "https://picsum.photos/100/100", url: "https://example.com" },
  ]

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
  )
}

export default Sponsors

