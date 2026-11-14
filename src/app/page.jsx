import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import PathJourney from "../components/PathJourney";
import SelectedWorks from "../components/SelectedWorks";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <PathJourney />
      <SelectedWorks />
    </main>
  );
}
