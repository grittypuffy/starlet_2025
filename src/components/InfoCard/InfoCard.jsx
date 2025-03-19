import titleImage from '../../assets/titleImage.png'
import './InfoCard.css'

function InfoCard() {
    return (
      <div className='container'>
        <img src={titleImage} alt='we can do it'/>

        <div className='text-holder'>
          <h3>Mind Empowered Presents</h3>
          <h1>Startlet Hackathon</h1>
          <p>Empowering Women and Gender Minorities</p>
          <button>Register Now</button>
        </div>
      </div>
    )
  }
  
  export default InfoCard