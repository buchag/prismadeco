import React from "react";
import Slider from "react-slick";
import Imagenes from 'next/image';
import carousel_data from './carousel-data.js';
import carousel_settings from './carousel-settings';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const carousel = () => {
  
      return (
        <Slider {...carousel_settings}>
          {carousel_data.map((img) => (
            <div key={img.id}>
              <Imagenes priority={true} src={img.imagen} alt={`Imagen ${img.id}`} />
            </div>
          ))}
        </Slider>
      );
    };
  
  export default carousel;