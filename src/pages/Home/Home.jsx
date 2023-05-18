import HomeHeroSubsection from "./Home-hero-subsection/HomeHeroSubsection";
import Companies from "./Companies/Companies";
import AboutUs from "./About-Us/AboutUs";
import Feature from "./Feature/Feature";
import Stats from "../../components/Stats/Stats";
import Offer from "../../components/Offer/Offer";
import FreeTrial from "../../components/FreeTrial/FreeTrial";

const Home = () => {
  return (
    <main>
      <HomeHeroSubsection />
      <Companies />
      <AboutUs />
      <Feature />
      <Stats />
      <Offer />
      <FreeTrial />
    </main>
  );
};

export default Home;
