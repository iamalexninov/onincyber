import HomeHeroSubsection from "./Home-hero-subsection/HomeHeroSubsection";
import Companies from "./Companies/Companies";
import AboutUs from "./About-Us/AboutUs";
import Feature from './Feature/Feature'
import Stats from "../../components/Stats/Stats";

const Home = () => {
  return (
    <main>
      <HomeHeroSubsection />
      <Companies />
      <AboutUs />
      <Feature />
      <Stats />
    </main>
  );
};

export default Home;
