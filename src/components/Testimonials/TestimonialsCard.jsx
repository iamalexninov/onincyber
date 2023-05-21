import styles from "./Testimonials.module.scss";

const TestimonialsCard = ({ client }) => {
  return (
    <div className={styles.testimonials__slider__review}>
      <img
        src={client.avatar}
        alt={`${client.name} feedback`}
        className={styles.testimonials__slider__review__img}
      />
      <p className={styles.testimonials__slider__review__p}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam at id
        adipisci. Nobis eligendi nesciunt asperiores earum. Obcaecati,
        repudiandae.
      </p>
      <p className={styles.testimonials__slider__review__info}>
        <span className={styles.testimonials__slider__review__info__name}>
          {client.name},
        </span>{" "}
        {client.town}
      </p>
    </div>
  );
};

export default TestimonialsCard;
