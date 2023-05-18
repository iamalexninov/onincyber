import styles from "./Feature.module.scss";

import { BsCheckAll as Check } from "react-icons/bs";

const Feature = () => {
  return (
    <section className={`section ${styles.feature}`}>
      <div className="wrapper">
        <div className={styles.feature__box}>
          <div className={styles.feature__content}>
            <span className="subtitle">why choose us?</span>
            <h2 className={styles.feature__content__h2}>
              Provide Advanced Security For Advanced Threat
            </h2>
            <p className={styles.feature__content__p}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
              dicta, quibusdam eligendi neque commodi laboriosam obcaecati
              perspiciatis maxime dignissimos mollitia corporis ratione
              recusandae, asperiores molestias placeat quisquam eveniet nemo?
              At!
            </p>
            <ul className={styles.feature__content__list}>
              <li className={styles.feature__content__list__item}>
                <Check className={styles.feature__content__list__item__icon} />
                <p>Content Delivery Network</p>
              </li>
              <li className={styles.feature__content__list__item}>
                <Check className={styles.feature__content__list__item__icon} />
                <p>Content Delivery Network</p>
              </li>
              <li className={styles.feature__content__list__item}>
                <Check className={styles.feature__content__list__item__icon} />
                <p>Content Delivery Network</p>
              </li>
            </ul>
            <button className={styles.feature__content__btn}>read more</button>
          </div>
          <div className={styles.feature__poster}></div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
