import styles from "./Service.module.scss";

import Hero from "../../components/Hero/Hero";
import Offer from "../../components/Offer/Offer";
import Testimonials from "../../components/Testimonials/Testimonials";
import Pricing from "../../components/Pricing/Pricing";

const Service = () => {
  return (
    <main>
      <Hero title={"Our Services"} />
      <section className={`section ${styles.service}`}>
        <div className="wrapper">
          <div className={styles.service__content}>
            <div className={styles.service__content__img}></div>
            <div className={styles.service__content__info}>
              <h2 className={styles.service__content__info__h2}>
                Get Personal Security For Your Company
              </h2>
              <p className={styles.service__content__info__p}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Eligendi quis pariatur incidunt eos velit soluta corporis eum
                voluptatem at vel quaerat quam numquam, quos ex. Labore itaque
                nostrum cum sequi?
              </p>
            </div>
          </div>
        </div>
      </section>
      <Offer />
      <Testimonials />
      <Pricing />
    </main>
  );
};

export default Service;
