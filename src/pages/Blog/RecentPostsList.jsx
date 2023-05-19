import styles from "./Blog.module.scss";

import { HiArrowSmRight as Arrow } from "react-icons/hi";

const RecentPostsList = ({title}) => {
  return (
    <li className={styles.blog__content__aside__recent__list__post}>
      <Arrow className={styles.blog__content__aside__recent__list__post__icon}/>
      <p className={styles.blog__content__aside__recent__list__post__p}>{title}</p>
    </li>
  );
};

export default RecentPostsList;
