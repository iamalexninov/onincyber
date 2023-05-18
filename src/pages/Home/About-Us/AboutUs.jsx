import styles from "./AboutUs.module.scss";

import pic from "../../../images/Home/welcome.jpg";
import { Link } from "react-router-dom";
import { HiArrowSmRight as Arrow } from "react-icons/hi";
import { GiWarlockEye as Lock,GiEarthAmerica as Earth } from "react-icons/gi";

const AboutUs = () => {
  return (
    <section className={`section ${styles.about}`}>
      <div className="wrapper">
        <div className={styles.about__content}>
          <span className="subtitle">welcome to onincyber</span>
          <h2 className={styles.about__content__h2}>
            The Perfect Solution For All The Protection Question
          </h2>
          <p className={styles.about__content__paragraph}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
            dicta, quibusdam eligendi neque commodi laboriosam obcaecati
            perspiciatis maxime dignissimos mollitia corporis ratione
            recusandae, asperiores molestias placeat quisquam eveniet nemo? At!
          </p>
          <ul className={styles.about__content__list}>
            <li className={styles.about__content__list__item}>
              <Earth
                className={styles.about__content__list__item__icon}
              />
              <h3 className={styles.about__content__list__item__h3}>High Quality Service</h3>
              <p className={styles.about__content__list__item__p}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas, similique! Exercitationem cumque aut beatae nam.
              </p>
              <Link className="read">
                Read More <Arrow />
              </Link>
            </li>
            <li className={styles.about__content__list__item}>
              <Lock
                className={styles.about__content__list__item__icon}
              />
              <h3 className={styles.about__content__list__item__h3}>Effective Protection</h3>
              <p className={styles.about__content__list__item__p}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas, similique! Exercitationem cumque aut beatae nam.
              </p>
              <Link className="read">
                Read More <Arrow />
              </Link>
            </li>
          </ul>
          <button className={styles.about__content__btn }>get a free trial</button>
        </div>
      </div>
      <div className={styles.about__poster}></div>
    </section>
  );
};

export default AboutUs;
