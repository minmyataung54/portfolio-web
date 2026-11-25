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
import ResumeQA from "./components/ResumeQA";

const resumeQAEnabled = Boolean(import.meta.env.DEV || import.meta.env.VITE_RESUME_API_URL);

function App() {
  return (
    <LanguageProvider>
      <BackgroundDecor />
      <Navbar resumeQAEnabled={resumeQAEnabled} />
      <main>
        <Hero resumeQAEnabled={resumeQAEnabled} />
        {resumeQAEnabled && <ResumeQA />}
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
