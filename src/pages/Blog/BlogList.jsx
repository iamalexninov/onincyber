import { Link } from "react-router-dom";
import styles from "./Blog.module.scss";

const BlogList = ({post}) => {
  return (
    <li className={styles.blog__content__list__item}>
        <img className={styles.blog__content__list__item__img} src={post.img} alt={post.title} />
        <span className="subtitle">{post.category}</span>
        <h3 className={styles.blog__content__list__item__h3}>{post.title}</h3>
        <p className={styles.blog__content__list__item__p }>{post.previewText}</p>
        <Link className="read">Read</Link>
    </li>
  )
}

export default BlogList