import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Companies from "../components/Companies";
import Services from "../components/Services";
import Definition from "../components/Definition";
import Features from "../components/Features";
import Integrations from "../components/Integrations";
import News from "../components/News";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Companies />
      <Services />
      <Definition />
      <Features />
      <Integrations />
      <News />
      <Footer />
    </>
  );
}
