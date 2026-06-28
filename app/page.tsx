import Navbar from '@/components/navigation/Navbar'
import StickyMobileCTA from '@/components/navigation/StickyMobileCTA'
import Hero from '@/components/sections/Hero'
import Packages from '@/components/sections/Packages'
import Gallery from '@/components/sections/Gallery'

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <StickyMobileCTA />
      <Hero />
      <Packages />
      <Gallery />

      {/* TODO Faza 3: */}
      {/* <PizzaExperience /> */}
      {/* <Testimonials /> */}
      {/* <Location /> */}
      {/* <BookingSection /> */}
      {/* <Footer /> */}
    </main>
  )
}
