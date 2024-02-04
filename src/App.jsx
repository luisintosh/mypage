import './App.css';
import AboutSection from './components/about-section';
import ContactSection from './components/contact-section';
import FullBackground from './components/full-background';
import IntroduceSection from './components/introduce-section';
import PortfolioSection from './components/portfolio-section';
import ProfileCard from './components/profile-card';
import ResumeSection from './components/resume-section';
import SkillsSection from './components/skills-section';

function App() {
  return (
    <div className="container mx-auto px-2 sm:px-0">
      <FullBackground />
      <ProfileCard />
      <IntroduceSection />
      <AboutSection />
      <ResumeSection />
      <SkillsSection />
      <PortfolioSection />
      <ContactSection />
      <div className="space my-20"></div>
    </div>
  );
}

export default App;
