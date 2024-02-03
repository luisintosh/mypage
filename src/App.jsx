import './App.css';
import ProfileCard from './components/profile-card';
import SectionTitle from './components/section-title';

function App() {
  return (
    <>
      <ProfileCard />
      <SectionTitle id="introduce" title="Introduce">
        <ion-icon name="home"></ion-icon>
      </SectionTitle>
    </>
  );
}

export default App;
