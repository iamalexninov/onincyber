import styles from "./FreeTrial.module.scss";

const FreeTrial = () => {
  return (
    <section className={`section ${styles.free}`}>
      <div className={styles.free__content}>
        <h2>Still Confused About Our Features?</h2>
        <h3 className={styles.free__content__h3}>Get A Free Trial - 7 Days.</h3>
        <button className={styles.free__content__btn}>get free trial</button>
      </div>
    </section>
  );
};

export default FreeTrial;
