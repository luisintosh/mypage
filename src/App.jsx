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
    <div className="min-h-screen flex flex-col gap-20 mt-10 xl:flex-row">
      <header className="xl:w-96">
        <div className="xl:fixed xl:h-screen xl:top-0 xl:bottom-0 xl:left-0 flex items-center justify-center">
          <ProfileCard />
        </div>
      </header>
      <main className="flex flex-col gap-12 max-w-3xl mx-auto px-3 xl:px-0">
        <FullBackground />
        <IntroduceSection />
        <AboutSection />
        <ResumeSection />
        <SkillsSection />
        <PortfolioSection />
        <ContactSection />
        <div className="space my-20"></div>
      </main>
    </div>
  );
}

export default App;
