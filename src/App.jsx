import { LanguageProvider } from "./context/LanguageContext";
import BackgroundDecor from "./components/BackgroundDecor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
  return (
    <LanguageProvider>
      <BackgroundDecor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
    </LanguageProvider>
  );
}

export default App;
