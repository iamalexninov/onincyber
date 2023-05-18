import { Link } from "react-router-dom";

import styles from "./Offer.module.scss";

import { HiArrowSmRight as Arrow } from "react-icons/hi";
import { SiWebpack as Web } from "react-icons/si";
import { VscDebug as Debug } from "react-icons/vsc";

import {
  BsFillShieldFill as Shield,
  BsFillLaptopFill as Laptop,
  BsFillPersonFill as Person,
  BsFillCloudFill as Cloud,
} from "react-icons/bs";

const Offer = () => {
  return (
    <section className={`section ${styles.offer}`}>
      <div className="wrapper">
        <div className={styles.offer__content}>
          <span className="subtitle">our services</span>
          <h2 className={styles.offer__content__h2}>What We Offer?</h2>
          <ul className={styles.offer__content__list}>
            <li className={styles.offer__content__list__item}>
              <Shield className={styles.offer__content__list__item__icon} />
              <h3 className={styles.offer__content__list__item__h3}>
                Network Security
              </h3>
              <p className={styles.offer__content__list__item__p}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad,
                consectetur fuga.
              </p>
              <Link className="read">
                Read More <Arrow />
              </Link>
            </li>
            <li className={styles.offer__content__list__item}>
              <Laptop className={styles.offer__content__list__item__icon} />
              <h3 className={styles.offer__content__list__item__h3}>
                Database Security
              </h3>
              <p className={styles.offer__content__list__item__p}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad,
                consectetur fuga.
              </p>
              <Link className="read">
                Read More <Arrow />
              </Link>
            </li>
            <li className={styles.offer__content__list__item}>
              <Web className={styles.offer__content__list__item__icon} />
              <h3 className={styles.offer__content__list__item__h3}>
                Web Security
              </h3>
              <p className={styles.offer__content__list__item__p}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad,
                consectetur fuga.
              </p>
              <Link className="read">
                Read More <Arrow />
              </Link>
            </li>
            <li className={styles.offer__content__list__item}>
              <Debug className={styles.offer__content__list__item__icon} />
              <h3 className={styles.offer__content__list__item__h3}>
                Locker Security
              </h3>
              <p className={styles.offer__content__list__item__p}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad,
                consectetur fuga.
              </p>
              <Link className="read">
                Read More <Arrow />
              </Link>
            </li>
            <li className={styles.offer__content__list__item}>
              <Person className={styles.offer__content__list__item__icon} />
              <h3 className={styles.offer__content__list__item__h3}>
                Data Security
              </h3>
              <p className={styles.offer__content__list__item__p}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad,
                consectetur fuga.
              </p>
              <Link className="read">
                Read More <Arrow />
              </Link>
            </li>
            <li className={styles.offer__content__list__item}>
              <Cloud className={styles.offer__content__list__item__icon} />
              <h3 className={styles.offer__content__list__item__h3}>
                Cloud Security
              </h3>
              <p className={styles.offer__content__list__item__p}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad,
                consectetur fuga.
              </p>
              <Link className="read">
                Read More <Arrow />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Offer;
