import HomeHeroSubsection from "./Home-hero-subsection/HomeHeroSubsection";
import Companies from "./Companies/Companies";
import AboutUs from "./About-Us/AboutUs";
import Feature from './Feature/Feature'

const Home = () => {
  return (
    <main>
      <HomeHeroSubsection />
      <Companies />
      <AboutUs />
      <Feature />
    </main>
  );
};

export default Home;
