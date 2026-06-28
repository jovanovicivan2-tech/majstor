import Navbar from '@/components/navigation/Navbar'
import StickyMobileCTA from '@/components/navigation/StickyMobileCTA'
import Hero from '@/components/sections/Hero'

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <StickyMobileCTA />
      <Hero />

      {/* TODO Faza 2: */}
      {/* <FeaturesSection /> */}
      {/* <PackagesSection /> */}
      {/* <GallerySection /> */}
      {/* <TestimonialsSection /> */}
      {/* <BookingSection /> */}
      {/* <FooterSection /> */}
    </main>
  )
}
