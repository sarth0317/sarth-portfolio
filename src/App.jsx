import Navbar from "./components/layout/navbar.jsx";
import Hero from "./components/hero/Hero";
import SelectedWorks from "./components/works/SelectedWorks";
import Vision from "./components/vision/Vision";
import Process from "./components/process/Process";
import Arsenal from "./components/arsenal/Arsenal";
import Agents from "./components/agents/Agents";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Hero />

      <SelectedWorks />

      <Vision />

      <Process />

      <Arsenal />

      <Agents />

      <Testimonials />

      <Contact />

      <Footer />
    </>
  );
}

export default App;