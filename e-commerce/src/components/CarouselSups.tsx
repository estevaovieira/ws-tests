import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from '../styles/index.module.css'

interface apiType {
  id: string;
  image: string;
  price: number;
}

const CarouselSups = () => {
  const [api, setApi] = useState<apiType[]>([]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  useEffect(() => {
    const fetchSupplements = async () => {
      try {
        const response = await axios.get('https://raw.githubusercontent.com/estevaovieira/ws-tests/main/e-commerce/src/utils/supplements.json');
        const data = response.data;
        setApi(data)
        console.log(data)
      } catch (error) {
        console.error('Erro ao consumir API:', error);
      }
    };

    fetchSupplements();
  }, []);

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselWrapper}>
        <Slider {...settings}>
          {api.map((item) => (
            <div key={item.id} className={styles.carouselDiv}>
              <img src={item.image} />
              <p>${item.price}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default CarouselSups;