import styles from "./Stats.module.scss";

import {
  BsFillPeopleFill as People,
  BsFillLockFill as Lock,
} from "react-icons/bs";
import { GiCircleCage as Circle } from "react-icons/gi";
import { IoIosPeople as Team } from "react-icons/io";

const Stats = () => {
  return (
    <section className={`section ${styles.stats}`}>
      <div className="wrapper">
        <ul className={styles.stats__list}>
          <li className={styles.stats__list__item}>
            <Circle className={styles.stats__list__item__icon} />
            <h2>852</h2>
            <p>Cybersecurity Projects</p>
          </li>
          <li className={styles.stats__list__item}>
            <People className={styles.stats__list__item__icon} />
            <h2>1232</h2>
            <p>Clients Protection</p>
          </li>
          <li className={styles.stats__list__item}>
            <Lock className={styles.stats__list__item__icon} />
            <h2>150</h2>
            <p>Service Guarantee</p>
          </li>
          <li className={styles.stats__list__item}>
            <Team className={styles.stats__list__item__icon} />
            <h2>65</h2>
            <p>Team Experts</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Stats;
