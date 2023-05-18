import styles from "./HomeHeroSubsection.module.scss";
import poster from '../../../images/home-hero.png';

const HomeHeroSubsection = () => {
  return (
    <section className={styles.hero}>
      <div className="wrapper">
        <div className={styles.hero__content}>
          <div className={styles.hero__content__text}>
            <h1 className={styles.hero__content__text__h1}>
              professional{" "}
              <span className={styles.hero__content__text__h1__span}>
                protection
              </span>{" "}
              with reliable service
            </h1>
            <p className={styles.hero__content__text__paragraph}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fuga
              deleniti excepturi blanditiis voluptatum dicta, fugiat nisi, at
              qui modi eligendi autem eveniet? Ducimus repellat modi obcaecati
              sed eos velit.
            </p>
            <button className={styles.hero__content__text__btn}>
              learn more
            </button>
          </div>
          <div className={styles.hero__content__poster}>
            <img
              className={styles.hero__content__poster__img}
              src={poster}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHeroSubsection;
