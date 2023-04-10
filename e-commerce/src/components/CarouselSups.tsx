import Slider from "react-slick";
import styles from '../styles/index.module.css'

const CarouselSups = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  return (
    <div className={styles.carouselContainer}>
      <Slider {...settings}>
        <div className={styles.carouselDiv}>
          <img src="/supplement2.jpg" />
        </div>
        <div className={styles.carouselDiv}>
          <img src="/supplement3.jpg" />
        </div>
        <div className={styles.carouselDiv}>
          <img src="/supplement4.jpg" />
        </div>
        <div className={styles.carouselDiv}>
          <img src="/supplement5.jpg" />
        </div>
      </Slider>
    </div>
  );
}

export default CarouselSups;