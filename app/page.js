import About from "@/components/About";
import Achievements from "@/components/Achievements";
import ContactSection from "@/components/Contact";
import Education from "@/components/Education";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Footer from "@/components/Footer";
import NavbarHero from "@/components/NavbarHero";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <NavbarHero/>
      <About/>
      <ExperienceTimeline/>
      <ProjectsShowcase/>
      <Skills/>
      <Achievements/>
      <Education/>
      <ContactSection/>
      <Footer/>
    </>
  );
}
