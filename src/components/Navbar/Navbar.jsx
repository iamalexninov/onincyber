import { Link } from "react-router-dom";

import {
  AiOutlineAlignLeft as Burger,
  AiOutlineClose as Close,
} from "react-icons/ai";

import styles from "./Navbar.module.scss";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setClick(false)

      if (position >= 200) {
        setScrollPosition(position);
      } else {
        setScrollPosition(0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={
        scrollPosition > 0 ? `${styles.header} ${styles.active}` : styles.header
      }
    >
      <div className={`wrapper ${styles.header__container}`}>
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
          <ul className={styles.header__container__navbar__list}>
            <li
              className={styles.header__container__navbar__list__item}
              onClick={handleClick}
            >
              <Link to="/">Home</Link>
            </li>
            <li
              className={styles.header__container__navbar__list__item}
              onClick={handleClick}
            >
              <Link to="/about">About</Link>
            </li>
            <li
              className={styles.header__container__navbar__list__item}
              onClick={handleClick}
            >
              <Link to="/service">Services</Link>
            </li>
            <li
              className={styles.header__container__navbar__list__item}
              onClick={handleClick}
            >
              <Link to="/blog">Blog</Link>
            </li>
            <li
              className={styles.header__container__navbar__list__item}
              onClick={handleClick}
            >
              <Link to="/contact">Contact</Link>
            </li>
            <button className={styles.header__container__navbar__list__btn}>
              contact us
            </button>
          </ul>
        </nav>
        <div className={styles.header__container__navbar__icons}>
          {click ? (
            <Close
              className={styles.header__container__navbar__icons__close}
              onClick={handleClick}
            />
          ) : (
            <Burger
              className={styles.header__container__navbar__icons__open}
              onClick={handleClick}
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
