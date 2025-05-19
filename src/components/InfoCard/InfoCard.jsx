import titleImage from '../../assets/titleImage.png'
import './InfoCard.css'

function InfoCard() {
    return (
      <div className='container'>
        <img src={titleImage} className="title-image" alt='we can do it'/>

        <div className='text-holder'>
          <h3>Mind Empowered Presents</h3>
          <h1>Starlet Hackathon</h1>
          <p> Empowering Women and Gender Minorities</p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeyP9JjvID93n8_zsTEk16sDpXvbi-4EieycQCi-hh-QGBqGA/viewform?fbclid=PAZXh0bgNhZW0CMTEAAadI4cMeIHnqgL9UbQOnCYaGk4OomIS1Yv9asHtH9GaR7Q_dS5SVU-neAuilYg_aem_7kXmfgbUjQylXHON8jc-uw " target="_blank" rel="noopener noreferrer"><button>Register Now</button></a>
        </div>
      </div>
    )
  }
  
  export default InfoCard