import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import PathJourney from "../components/PathJourney";
import SelectedWorks from "../components/SelectedWorks";
import Process from "../components/Process";
import Testimonials from "../components/Testimonials";
import Faq from "../components/Faq";
import ContactCTA from "../components/ContactCTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <PathJourney />
      <SelectedWorks />
      <Process />
      <Testimonials />
      <Faq />
      <ContactCTA />
      <Footer />
    </main>
  );
}
