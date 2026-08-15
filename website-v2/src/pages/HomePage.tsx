import { Hero } from '../components/home/Hero'
import { FeaturedBento } from '../components/home/FeaturedBento'
import { ActivityLog } from '../components/home/ActivityLog'

export function HomePage() {
  return (
    <>
      <Hero />
      {/* <SignalBar signals={homeSignals} /> */}
      <FeaturedBento />
      <ActivityLog />
    </>
  )
}
