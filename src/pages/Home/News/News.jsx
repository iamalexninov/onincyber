import { Link } from "react-router-dom";
import styles from "./News.module.scss";

import { HiArrowSmRight as Arrow } from "react-icons/hi";

import pic1 from '../../../images/news-pic1.jpg'
import pic2 from '../../../images/news-pic2.jpg'
import pic3 from '../../../images/news-pic3.jpg'

const News = () => {
  return (
    <section className={`section ${styles.news}`}>
      <div className="wrapper">
        <span className="subtitle">our news</span>
        <h2 className={styles.news__h2}>Latest News</h2>
        <ul className={styles.news__list}>
          <li className={styles.news__list__item}>
            <div className={styles.news__list__item__poster}>
                <img className={styles.news__list__item__poster__img} src={pic1} alt="Five Strategies To Oprimize Cloud Security in 2023." />
            </div>
            <div className={styles.news__list__item__text}>
              <span className="subtitle">cloud security</span>
              <h3 className={styles.news__list__item__text__h3}>Five Strategies To Oprimize Cloud Security in 2023.</h3>
              <p className={styles.news__list__item__text__p}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                blanditiis ipsa, consequuntur...
              </p>
              <Link className="read">
                Read More <Arrow />
              </Link>
            </div>
          </li>
          <li className={styles.news__list__item}>
            <div className={styles.news__list__item__poster}>
                <img className={styles.news__list__item__poster__img} src={pic2} alt="Cyber Criminals Publish Stolen Sepa Data" />
            </div>
            <div className={styles.news__list__item__text}>
              <span className="subtitle">criminals</span>
              <h3 className={styles.news__list__item__text__h3}>Cyber Criminals Publish Stolen Sepa Data</h3>
              <p className={styles.news__list__item__text__p}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                blanditiis ipsa, consequuntur...
              </p>
              <Link className="read">
                Read More <Arrow />
              </Link>
            </div>
          </li>
          <li className={styles.news__list__item}>
            <div className={styles.news__list__item__poster}>
                <img className={styles.news__list__item__poster__img} src={pic3} alt="The Security Risks Of Changing Package Owners" />
            </div>
            <div className={styles.news__list__item__text}>
              <span className="subtitle">security</span>
              <h3 className={styles.news__list__item__text__h3}>The Security Risks Of Changing Package Owners</h3>
              <p className={styles.news__list__item__text__p}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                blanditiis ipsa, consequuntur...
              </p>
              <Link className="read">
                Read More <Arrow />
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default News;
