import { SpeedInsights } from "@vercel/speed-insights/next"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Testimonial from "./components/Testimonial";
import Progress from "./components/Progress";
import Fqa from "./components/FQAs";
import Footer from "./components/Footer.jsx";
function App() {
    const appStyle = {
      fontFamily: "'Archivo', sans-serif",
    }
  return (

    <div className= "min-h-screen bg-[#efb4b6] text-black overflow-hidden" style={appStyle}>
      <SpeedInsights />
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Testimonial />
      <Progress />
      <Fqa />
      <Footer />
    </div>
  )
}

export default App
