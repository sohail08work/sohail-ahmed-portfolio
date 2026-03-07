import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import LogoStrip from "./components/LogoStrip";
import SelectedWins from "./components/SelectedWins";
import WhyMe from "./components/WhyMe";
import Services from "./components/Services";
import CaseStudies from "./components/CaseStudies";
import HowIWork from "./components/HowIWork";
import ToolsStack from "./components/ToolsStack";
import ResumeCTA from "./components/ResumeCTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-300 font-sans selection:bg-[#ccff00] selection:text-black">
      <CustomCursor />
      <Header />

      <main>
        <Hero />
        <About />
        <LogoStrip />
        <SelectedWins />
        <WhyMe />
        <Services />
        <CaseStudies />
        <HowIWork />
        <ToolsStack />
        <ResumeCTA />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
