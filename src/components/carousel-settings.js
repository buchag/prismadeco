
const carousel_settings = {
    dots: true,
    infinite: true,
    speed: 2500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 5000,
    centerMode: false, // Habilita el modo centrado
    adaptiveHeight: true, // Habilita la altura del contenedor
    responsive: [
        {
          breakpoint: 1210,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            centerMode: false,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 905,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: true,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 705,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            infinite: true,
            dots: true
          }
        }
      ]
  };

  export default carousel_settings;