import styles from "./Subscribe.module.scss";

const Subscribe = () => {
  return (
    <section className={`section ${styles.subscribe}`}>
      <div className="wrapper">
        <div className={styles.subscribe__content}>
          <h2 className={styles.subscribe__content__h2}>
            Subscribe For Our Newsletter
          </h2>
          <div className={styles.subscribe__content__form}>
            <input
              className={styles.subscribe__content__form__input}
              type="text"
              placeholder="Email Address"
            />
            <button className={styles.subscribe__content__form__btn}>
              subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
