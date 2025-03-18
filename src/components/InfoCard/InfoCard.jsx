import titleImage from '../../assets/titleImage.png'
import './InfoCard.css'
function InfoCard() {
    return (
      <>
        <img src={titleImage} alt='women in tech'/>
        <h3>Mind Empowered Presents</h3>
        <h1>Startlet Hackathon</h1>
        <p>Empowering Women and Gender Minorities</p>
        <button>Register Now</button>

        <div className='card-holder'>
          <div className='event-details'>
            <h1>Event Details</h1>
            <h1></h1>
            <p>Date : xx December 20xx</p>
            <p>Time : xxth 23:00 to xith 12:00</p>
            <p>Location : 212 Place, Lorem</p>
          </div>

          <div className='text-holder'>
            <h1>More On Starlet</h1>
            <p>Starlet is an inclusive hackathon exclusively for women and other gender minorities, encouraging collaboration and bringing out the best in them. It facilitates meaningful connections and boosts the confidence of participants, creating a safe space for learning, networking, and teamwork.
            
            See brochure here.
            </p>
          </div>
        </div>
      </>
    )
  }
  
  export default InfoCard