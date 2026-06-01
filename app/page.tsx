import Hero from './sections/Hero'
import Problem from './sections/Problem'
import Solution from './sections/Solution'
import HowItWorks from './sections/HowItWorks'
import Markets from './sections/Markets'
import Comparison from './sections/Comparison'
import Pricing from './sections/Pricing'
import Testimonials from './sections/Testimonials'
import FAQ from './sections/FAQ'
import CTA from './sections/CTA'
import Footer from './sections/Footer'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <Markets />
      <Comparison />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}
