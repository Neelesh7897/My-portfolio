import About from "../components/About";
import Activity from "../components/Activity";
import Goals from "../components/Goals";
import Hero from "../components/Hero";
import Journey from "../components/Journey";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Portfolio({ onContactOpen }) {
  return (
    <>
      <Hero onContactOpen={onContactOpen} />
      <About />
      <Skills />
      <Journey />
      <Projects />
      <Goals />
      <Activity />
    </>
  );
}
