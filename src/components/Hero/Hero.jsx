import styles from "./Hero.module.scss";

const Hero = ({ title }) => {
  return (
    <section className={`section ${styles.hero}`}>
      <h2>{title}</h2>
    </section>
  );
};

export default Hero;
