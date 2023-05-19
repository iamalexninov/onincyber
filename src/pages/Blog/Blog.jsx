import styles from "./Blog.module.scss";

import Hero from "../../components/Hero/Hero";
import Subscribe from "../../components/Subscribe/Subscribe";

import pic1 from "../../images/news-pic1.jpg";
import pic2 from "../../images/news-pic2.jpg";
import pic3 from "../../images/news-pic3.jpg";
import pic4 from "../../images/news-pic4.jpg";

import plansPic from "../../images/plans.jpg";

import RecentPostsList from "./RecentPostsList";
import { Link } from "react-router-dom";
import BlogList from "./BlogList";

const Blog = () => {
  const blogPosts = [
    {
      title: "Five Strategies To Optimize Cloud Security in 2021",
      img: pic1,
      category: "Cloud Security",
      previewText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic officiis alias deserunt quaerat distinctio doloremque consequuntur.",
    },
    {
      title: "Cyber Criminals Publish Stolen Sepa Data",
      img: pic2,
      category: "Cloud Security",
      previewText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic officiis alias deserunt quaerat distinctio doloremque consequuntur.",
    },
    {
      title: "The Security Risks Of Changing Package Owners",
      img: pic3,
      category: "Security",
      previewText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic officiis alias deserunt quaerat distinctio doloremque consequuntur.",
    },
    {
      title: "8 Ways You Could Be Inviting a Cybersecurity Attack",
      img: pic4,
      category: "Security",
      previewText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic officiis alias deserunt quaerat distinctio doloremque consequuntur.",
    },
  ];

  return (
    <main>
      <Hero title={"Blog Posts"} />
      <section className={`section ${styles.blog}`}>
        <div className="wrapper">
          <div className={styles.blog__content}>
            <aside className={styles.blog__content__aside}>
              <div className={styles.blog__content__aside__recent}>
                <h3 className={styles.blog__content__aside__recent__h3}>
                  Recent Blog Posts
                </h3>
                <ul className={styles.blog__content__aside__recent__list}>
                  {blogPosts.slice(0, 3).map((post, i) => (
                    <RecentPostsList title={post.title} key={i} />
                  ))}
                </ul>
              </div>
              <div className={styles.blog__content__aside__plans}>
                <img
                  className={styles.blog__content__aside__plans__img}
                  src={plansPic}
                  alt="View Security Plans"
                />
                <div className={styles.blog__content__aside__plans__info}>
                  <h3 className={styles.blog__content__aside__plans__info__h3}>
                    See our security plans
                  </h3>
                  <Link to="/service">
                    <button
                      className={styles.blog__content__aside__plans__info__btn}
                    >
                      plans
                    </button>
                  </Link>
                </div>
              </div>
            </aside>
            <ul className={styles.blog__content__list}>
              {blogPosts.map((post, i) => (
                <BlogList post={post} key={i} />
              ))}
            </ul>
          </div>
        </div>
      </section>
      <Subscribe />
    </main>
  );
};

export default Blog;
