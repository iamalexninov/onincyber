import { Link } from "react-router-dom";

import {
  AiOutlineAlignLeft as Burger,
  AiOutlineClose as Close,
} from "react-icons/ai";

import styles from "./Navbar.module.scss";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [click, setClick] = useState(false);
  const navRef = useRef();

  const handleOpen = () => {
    setClick(true);
  };

  const hadnleClose = () => {
    setClick(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setClick(false);
      const position = window.scrollY;

      position >= 200 ? setScrollPosition(position) : setScrollPosition(0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setClick(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <header
      className={
        scrollPosition > 0 ? `${styles.header} ${styles.active}` : styles.header
      }
    >
      <div className={`wrapper ${styles.header__container}`} ref={navRef}>
        <Link to="/" className="logo">
          OninCyber
        </Link>
        <nav
          className={
            click
              ? `${styles.header__container__navbar} ${styles.active}`
              : styles.header__container__navbar
          }
        >
          <div className={styles.header__container__navbar__top}>
            <Link to="/" className="logo">
              OninCyber
            </Link>
            <Close
              className={styles.header__container__navbar__top__close}
              onClick={hadnleClose}
            />
          </div>
          <ul className={styles.header__container__navbar__list}>
            <li
              className={styles.header__container__navbar__list__item}
              onClick={hadnleClose}
            >
              <Link to="/">Home</Link>
            </li>
            <li
              className={styles.header__container__navbar__list__item}
              onClick={hadnleClose}
            >
              <Link to="/about">About</Link>
            </li>
            <li
              className={styles.header__container__navbar__list__item}
              onClick={hadnleClose}
            >
              <Link to="/service">Services</Link>
            </li>
            <li
              className={styles.header__container__navbar__list__item}
              onClick={hadnleClose}
            >
              <Link to="/blog">Blog</Link>
            </li>
            <button className={styles.header__container__navbar__list__btn}>
              <Link to="/contact">contact us</Link>
            </button>
          </ul>
          <div className={styles.header__container__navbar__bottom}>
            <p>onincyber@gmail.com</p>
            <p>+359 896 35 9471</p>
          </div>
        </nav>
        <Burger
          className={styles.header__container__open}
          onClick={handleOpen}
        />
      </div>
    </header>
  );
};

export default Navbar;
