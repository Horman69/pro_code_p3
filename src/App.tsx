import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { About } from "./components/About";
import { Cta } from "./components/Cta";
import { FAQ } from "./components/FAQ";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";
import { Newsletter } from "./components/Newsletter";
import { ScrollToTop } from "./components/ScrollToTop";
import { Services } from "./components/Services";
import { Team } from "./components/Team";
import { Testimonials } from "./components/Testimonials";
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import "./App.css";

function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <HowItWorks />
      <Cta />
      <Features />
      <About />
      <Testimonials />
      <Team />
      <Newsletter />
      <FAQ />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen"> {/* Добавлены классы */}
        <Navbar />
        <main className="flex-grow"> {/* Добавлен класс flex-grow */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-use" element={<TermsOfUse />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <ScrollToTop />
    </Router>
  );
}

export default App;
