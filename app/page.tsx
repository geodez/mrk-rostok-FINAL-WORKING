import Navigation from '@/components/Navigation'
import Hero from '@/components/hero/Hero'
import Features from '@/components/features/Features'
import ProductComparison from '@/components/products/ProductComparison'
import Calculator from '@/components/calculator/Calculator'
import Contact from '@/components/contact/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <section id="features">
        <Features />
      </section>
      <section id="products">
        <ProductComparison />
      </section>
      <Calculator />
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </main>
  )
}
