import styles from "./Team.module.scss";

import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

import member1 from "../../images/member-1.jpg";
import member2 from "../../images/member-2.jpg";
import member3 from "../../images/member-3.jpg";

import TeamList from "./TeamList";

const Team = () => {
  const members = [
    {
      pic: member1,
      name: "Alex Ninov",
      occupation: "Network Security",
      socialLinks: [<BsFacebook/>, <BsInstagram/>, <BsTwitter/>],
    },
    {
      pic: member2,
      name: "Stoqn Stoev",
      occupation: "Programmer",
      socialLinks: [<BsFacebook/>, <BsInstagram/>, <BsTwitter/>],
    },
    {
      pic: member3,
      name: "Griffin Jimenez",
      occupation: "SEO",
      socialLinks: [<BsFacebook/>, <BsInstagram/>, <BsTwitter/>],
    },
  ];

  return (
    <section className={`section ${styles.team}`}>
      <div className="wrapper">
        <div className={styles.team__content}>
          <span className="subtitle">team</span>
          <h2 className={styles.team__content__h2}>Our Team Members</h2>
          <ul className={styles.team__content__list}>
            {members.map((member,i) => (
              <TeamList member={member} key={i}/>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Team;
