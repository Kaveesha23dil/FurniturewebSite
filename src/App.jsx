import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Products from './components/Products'
import WhyChooseUs from './components/WhyChooseUs'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Stats />
      <Products />
      <WhyChooseUs />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default App