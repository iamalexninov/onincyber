import styles from "./Companies.module.scss";

import company1 from "../../../images/Home/company-1.png";
import company2 from "../../../images/Home/company-2.png";
import company3 from "../../../images/Home/company-3.png";
import company4 from "../../../images/Home/company-4.png";

const Companies = () => {
  return (
    <section className={`section ${styles.companies}`}>
      <div className="wrapper">
        <div className={styles.companies__content}>
          <h2 className={styles.companies__content__h2}>
            Trusted Over{" "}
            <span className={styles.companies__content__h2__span}>2100+</span>{" "}
            Companies In The World
          </h2>
          <div className={styles.companies__content__items}>
            <img
              src={company1}
              alt="Software Company Poster"
              className={styles.companies__content__items__img}
            />
            <img
              src={company2}
              alt="Hexatech Company Poster"
              className={styles.companies__content__items__img}
            />
            <img
              src={company3}
              alt="Metrics Company Poster"
              className={styles.companies__content__items__img}
            />
            <img
              src={company4}
              alt="TriplaTech Company Poster"
              className={styles.companies__content__items__img}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Companies;
