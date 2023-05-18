import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";

import {
  BsFacebook as Fb,
  BsInstagram as Instagram,
  BsLinkedin as Linkedin,
} from "react-icons/bs";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="wrapper">
        <div className={styles.footer__content}>
          <div className={styles.footer__content__top}>
            <div className={styles.footer__content__top__logo}>
              <Link className="logo">onincyber</Link>
              <p className={styles.footer__content__top__logo__p}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut
                repudiandae tenetur rerum.
              </p>
            </div>
            <ul className={styles.footer__content__top__nav}>
              <li>
                <p>Navigation</p>
              </li>
              <li className={styles.footer__content__top__nav__item}>
                <Link to="/">Home</Link>
              </li>
              <li className={styles.footer__content__top__nav__item}>
                <Link to="/about">About</Link>
              </li>
              <li className={styles.footer__content__top__nav__item}>
                <Link to="/service">Services</Link>
              </li>
              <li className={styles.footer__content__top__nav__item}>
                <Link to="/blog">Blog</Link>
              </li>
              <li className={styles.footer__content__top__nav__item}>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
            <ul className={styles.footer__content__top__terms}>
              <li>
                <p>Terms and Privacy</p>
              </li>
              <li>
                <Link to="#">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="#">Privacy</Link>
              </li>
              <li>
                <Link to="#">Security</Link>
              </li>
            </ul>
            <ul className={styles.footer__content__top__support}>
              <li>
                <p>Support</p>
              </li>
              <li>
                <Link to="#">User Guide</Link>
              </li>
              <li>
                <Link to="#">Help</Link>
              </li>
              <li>
                <Link to="#">Examples</Link>
              </li>
            </ul>
          </div>
          <div className={styles.footer__content__bottom}>
            <p className={styles.footer__content__bottom__p}>&copy; All rights reserved.</p>
            <ul className={styles.footer__content__bottom__social}>
              <li className={styles.footer__content__bottom__social__item}>
                <Fb />
              </li>
              <li className={styles.footer__content__bottom__social__item}>
                <Instagram />
              </li>
              <li className={styles.footer__content__bottom__social__item}>
                <Linkedin />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
