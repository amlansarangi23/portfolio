import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import Projects from "./components/Projects";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
// import AchievementsSection from "./components/AchievementsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-b from-[#4a1286] to-[#7f4d80]">
      <Navbar />
      <div className="container mt-24 mx-auto px-2 sm:px-12 py-4">
        <HeroSection />
        <AboutSection />
        {/* <ProjectsSection /> */}
        <Projects/>
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}