import InfoCard from '../../components/InfoCard/InfoCard'
import EventDetails from '../../components/EventDetails/EventDetails'
import Overview from '../../components/Overview/Overview'
import Prizes from '../../components/Prizes/Prizes'
import Sponsors from '../../components/Sponsors/Sponsors'
import Faq from '../../components/Faq/Faq'
export default function Home() {
  return (
    <>
      <InfoCard />
      <EventDetails />
      <Prizes />
      <Sponsors />
      <Overview />
      <Faq/>
    </>
  )
}
