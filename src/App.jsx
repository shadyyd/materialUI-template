import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./components/shared/Navbar";
import HeroSection from "./components/HeroSection";
import { AboutUs } from "./components/AboutUs";
import { Services } from "./components/Services";
import Portofolio from "./components/Portofolio";
import ContactSection from "./components/ContactSection";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Services />
      <Portofolio />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
