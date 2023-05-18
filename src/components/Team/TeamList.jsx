import { useState } from "react";

import styles from "./Team.module.scss";

const TeamList = ({ member }) => {
  const [showMemberInfo, setShowMemberInfo] = useState(false);

  const handleMouseOver = (e) => {
    setShowMemberInfo(true);
  };

  const handleMouseOut = (e) => {
    setShowMemberInfo(false);
  };

  return (
    <>
      <li
        className={styles.team__content__list__member}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <div className={styles.team__content__list__member__card}>
          <img
            className={styles.team__content__list__member__card__img}
            src={member.pic}
            alt={`${member.name} a team member`}
          />
          <div
            className={
              showMemberInfo
                ? `${styles.team__content__list__member__card__info} ${styles.active}`
                : styles.team__content__list__member__card__info
            }
          >
            <h3 className={styles.team__content__list__member__card__info__h3}>
              {member.name}
            </h3>
            <p className={styles.team__content__list__member__card__info__p}>
              {member.occupation}
            </p>
            <ul
              className={styles.team__content__list__member__card__info__social}
            >
              {member.socialLinks.map((socialLink,i)=>(
                <li key={i} className={styles.team__content__list__member__card__info__social__icon}>
                  {socialLink}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </li>
    </>
  );
};

export default TeamList;
