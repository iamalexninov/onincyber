import styles from "./Pricing.module.scss";

const Pricing = () => {
  return (
    <section className={`section ${styles.pricing}`}>
      <div className="wrapper">
        <div className={styles.pricing__content}>
          <div className={styles.pricing__content__text}>
            <span className="subtitle">our pricing</span>
            <h2 className={styles.pricing__content__text__h2}>Flexible Pricing Plans</h2>
            <p className={styles.pricing__content__text__p}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam
              porro laudantium eveniet maxime ex accusamus natus debitis,
              repellendus voluptate, soluta adipisci, reiciendis voluptatum
              quos? Obcaecati reiciendis ipsum aliquam placeat doloribus!
            </p>
            <button className={styles.pricing__content__text__btn}>see more</button>
          </div>
          <ul className={styles.pricing__content__plans}>
            <li className={styles.pricing__content__plans__item}>
              <h3 className={styles.pricing__content__plans__item__title}>Basic Plan</h3>
              <h2 className={styles.pricing__content__plans__item__price}>$59</h2>
              <ul className={styles.pricing__content__plans__item__list}>
                <li className={styles.pricing__content__plans__item__list__service}><p>500 Malware Removal</p> </li>
                <li className={styles.pricing__content__plans__item__list__service}><p>Configure Software</p> </li>
                <li className={styles.pricing__content__plans__item__list__service}><p>Remote Administrator</p> </li>
                <li className={styles.pricing__content__plans__item__list__service}><p>24/7 Support</p> </li>
              </ul>
              <button className={styles.pricing__content__plans__item__btn}>purchase now</button>
            </li>
            <li className={styles.pricing__content__plans__item}>
              <h3 className={styles.pricing__content__plans__item__title}>Deluxe Plan</h3>
              <h2 className={styles.pricing__content__plans__item__price}>$89</h2>
              <ul className={styles.pricing__content__plans__item__list}>
                <li className={styles.pricing__content__plans__item__list__service}><p>500 Malware Removal</p> </li>
                <li className={styles.pricing__content__plans__item__list__service}><p>Configure Software</p> </li>
                <li className={styles.pricing__content__plans__item__list__service}><p>Remote Administrator</p> </li>
                <li className={styles.pricing__content__plans__item__list__service}><p>24/7 Support</p> </li>
              </ul>
              <button className={styles.pricing__content__plans__item__btn}>purchase now</button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
