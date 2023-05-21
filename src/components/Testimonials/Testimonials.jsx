import styles from "./Testimonials.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialsCard from "./TestimonialsCard";

const Testimonials = () => {
  const clients = [
    {
      avatar:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
      name: "Alex Ninov",
      town: "Plovdiv",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      name: "Eli Ivanova",
      town: "Sofia",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
      name: "Petur Nenov",
      town: "Sofia",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className={`section ${styles.testimonials}`}>
      <span className="subtitle">testimonials</span>
      <h2 className={styles.testimonials__title}>Clients Feedback</h2>
      <div className={styles.testimonials__slider}>
        <Slider {...settings}>
          {clients.map((client,i) => {
            return <TestimonialsCard key={i} client={client}/>;
          })}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
