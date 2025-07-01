import "./Faq.css";
import {useState} from 'react'

const faqData = [
  {
    question: "What is a hackathon?",
    answer: <p>Hackathon is a technical event where people work together to build solutions within a short period of time. People build applications, tools or prototypes that solves specific problems.</p>,
  },
  {
    question: "Is Starlet a beginner-friendly hackathon?",
    answer: <p>Yes, Starlet is an inclusive, beginner-friendly hackathon which aims to serve as the starting point for people who are getting started with technology.</p>,
  },
  {
    question: "What is the eligibility for participation?",
    answer: <p>Starlet is a hackathon for gender minorities, meaning if you're a woman, you're welcome to join us.</p>,
  },
  {
    question: "What should I bring for participation?",
    answer: (
      <>
        <p>To ensure a smooth and comfortable experience, don't forget to pack:</p>
        <ol>
          <li>Your laptop & charger</li>
          <li>Gadgets or tools related to your problem statement - SBC, etc.</li>
          <li>Phone & charger/power bank</li>
          <li>Any regular medication, including inhalers if applicable</li>
          <li>A steel water bottle (we're proudly plastic-free 🌿. Water dispenser will be kept at the venue)</li>
        </ol>
      </>
    ),
  },
  {
    question: "Do I need to know how to code to participate?",
    answer: <p>
      No, while having programming knowledge is essential for building a product, other non-programming 
      activities like design, presentation, ideation, require no programming skills.
      If you're good at design, documentation or other activities, we advise you to team up with teammates who 
      knows programming.
      </p>,
  },
  {
    question: "What can I expect from a hackathon?",
    answer: <p>You can experience the thrill of working with a team to solve a problem in innovative manner
      in shorter duration of time, interact with like-minded people, gain knowledge and insights from expert sessions,
      gain mentorship and support for further development of your idea.
      .</p>,
  },
  {
    question: "How do I reach the venue?",
    answer: (
      <>
        <ol>
          <li>Take any bus to Ernakulam</li>
          <li>Get down at Boat Jetty</li>
          <li>Hop onto the boat to Fort Kochi</li>
          <li>Second stop is Fort Kochi Jetty</li>
          <li>Take an auto to Gujarati College</li>
        </ol>
        <p>Alternatively,</p>
        <ol>
          <li>Take a Fort Kochi bus</li>
          <li>Get down at last stop</li>
          <li>Take an auto to Gujarati College</li>
        </ol>
      </>
    ),
  },
  {
    question: "What is the schedule of the hackathon?",
    answer: <p>Please check out our schedule <a href="/schedule.png">here</a>.</p>,
  },
  {
    question: "I don't have a team or an idea. Can I still participate?",
    answer: <p>
      You're welcome to join us either way, we can help you team up and come up with good ideas for
      the provided problem statements.
      </p>,
  },
  {
    question: "What is the theme of the hackathon? Is it an open-ended hackathon?",
    answer: <p>This edition of Starlet is focused on inclusivity and we have problem statements on which you are supposed to work on.</p>
  },
  {
    question: "Do we have access to Wi-fi and power outlets?",
    answer: <p>Yes, our venue has facilities for Wi-fi and power outlets.</p>,
  },
  {
    question: "Do we have access to mentors?",
    answer: <p>Yes, we have mentors who are available at the venue. Feel free to reach out to them if you are stuck, need ideas or approaches.</p>,
  },
  {
    question: "Do we have access to talks and sessions?",
    answer: <p>Yes, we have speakers from diverse domains who deliver insightful talks relevant to technology.</p>,
  },
  {
    question: "I have a doubt. Who should I contact?",
    answer: <p>
      Feel free to reach out to our team at <a href="mailto:mindempowered2020@gmail.com">mindempowered2020@gmail.com</a>.
      We reply to mails within 24 hours.</p>,
  },
  {
    question: "When will the problem statements be released?",
    answer: <p>The problem statements will be made available on the day of the hackathon to ensure fairness.</p>,
  },
  {
    question: "Is submitting past projects allowed?",
    answer: <p>
        No, submission of past projects will lead to disqualification of the team in order
        to maintain the integrity of the hackathon.
        </p>,
  },
  {
    question: "Will accommodation and food be provided?",
    answer: <p>
      We provide accommodation, travel and food for the duration of the hackathon.
      We serve vegetarian food and North Indian snacks to keep the fuel up.
      </p>,
  },
  {
    question: "Who can I approach if I feel uncomfortable or unsafe?",
    answer: <p>You can approach our mentors and organizers in case if you're facing discomfort or feeling unsafe.</p>,
  },
  {
    question: "How do I stay updated?",
    answer: <p>Please check out our WhatsApp group for further updates.</p>,
  },
];


const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };
  return (
    <div className="faq-section">
      <div className="text-holder faq-header">
        <h1>Frequently Asked Questions</h1>
      </div>
      <section className="faq-section">
        <div className="faq-container">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="faq-card"
              onClick={() => toggle(index)}
              onKeyDown={(e) => e.key === 'Enter' || e.key === ' ' ? toggle(index) : null}
              tabIndex={0}
              role="button"
              aria-expanded={openIndex === index}
              aria-controls={`faq-content-${index}`}
            >
              <div className="faq-name">{item.question}</div>
              {openIndex === index && (
                <div
                  id={`faq-content-${index}`}
                  className="faq-answer"
                  style={{ color: '#fff' }}
                >
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Faq;
