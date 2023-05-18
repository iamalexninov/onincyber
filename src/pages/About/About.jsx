import styles from "./About.module.scss";

import { BsFillCheckCircleFill as Check } from "react-icons/bs";
import { BiTargetLock as Target } from "react-icons/bi";

import Hero from "../../components/Hero/Hero";
import Subscribe from "../../components/Subscribe/Subscribe";
import Team from "../../components/Team/Team";

const About = () => {
  return (
    <main>
      <Hero title={"About Us."} />
      <section className={`section ${styles.about}`}>
        <div className="wrapper">
          <div className={styles.about__content}>
            <div className={styles.about__content__info}>
              <span className="subtitle">welcome to our company</span>
              <h2 className={styles.about__content__info__h2}>Our Story</h2>
              <p className={styles.about__content__info__p}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                quis fuga vero pariatur consequatur necessitatibus vitae nemo
                quia animi delectus atque, laboriosam, temporibus inventore
                corporis impedit quae aliquid eveniet laudantium.
              </p>
              <ul className={styles.about__content__info__list}>
                <li className={styles.about__content__info__list__item}>
                  <Check
                    className={styles.about__content__info__list__item__icon}
                  />
                  <h3 className={styles.about__content__info__list__item__h3}>
                    Our Vission
                  </h3>
                  <p className={styles.about__content__info__list__item__p}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                    dolorum deleniti dignissimos voluptas asperiores.
                  </p>
                </li>
                <li className={styles.about__content__info__list__item}>
                  <Target
                    className={styles.about__content__info__list__item__icon}
                  />
                  <h3 className={styles.about__content__info__list__item__h3}>
                    Our Mission
                  </h3>
                  <p className={styles.about__content__info__list__item__p}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                    dolorum deleniti dignissimos voluptas asperiores.
                  </p>
                </li>
              </ul>
              <button className={styles.about__content__info__btn}>
                get free trial
              </button>
            </div>
            <div className={styles.about__content__img}></div>
          </div>
        </div>
      </section>
      <Team />
      <Subscribe />
    </main>
  );
};

export default About;
