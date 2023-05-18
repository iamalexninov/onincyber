import styles from "./Contact.module.scss";

import { BsFillTelephoneFill as Phone } from "react-icons/bs";
import { MdMarkEmailUnread as Email } from "react-icons/md";

import Hero from "../../components/Hero/Hero";
import Subscribe from "../../components/Subscribe/Subscribe";

const Contact = () => {
  return (
    <main>
      <Hero title={"Contact Us."} />
      <section className={`section ${styles.contact}`}>
        <div className="wrapper">
          <div className={styles.contact__content}>
            <div className={styles.contact__content__info}>
              <span className="subtitle">contact us</span>
              <h2 className={styles.contact__content__info__h2}>Get In Touch</h2>
              <p className={styles.contact__content__info__p}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis, hic libero? Magnam quae ut harum, fugiat esse unde
                nostrum incidunt ratione.
              </p>
              <ul className={styles.contact__content__info__list}>
                <li className={styles.contact__content__info__list__item}>
                  <Phone className={styles.contact__content__info__list__item__icon}/>
                  <p>+359 986 45 9864</p>
                </li>
                <li className={styles.contact__content__info__list__item}>
                  <Email className={styles.contact__content__info__list__item__icon}/>
                  <p>onin@gmail.com</p>
                </li>
              </ul>
            </div>
            <form className={styles.contact__content__form}>
              <input className={styles.contact__content__form__field} type="text" placeholder="Your First Name" required/>
              <input className={styles.contact__content__form__field} type="text" placeholder="Your Last Name" required/>
              <input className={styles.contact__content__form__field} type="email" placeholder="Your Email" required/>
              <input className={styles.contact__content__form__field} type="text" placeholder="Your Subject" required/>
              <textarea className={styles.contact__content__form__field} placeholder="Your Message" cols="20" rows="10"></textarea>
              <button className={styles.contact__content__form__btn}>submit</button>
            </form>
          </div>
        </div>
      </section>
      <Subscribe />
    </main>
  );
};

export default Contact;
