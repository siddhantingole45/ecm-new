import Slider from "react-slick";
import "./Carousel.css";

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,            
    autoplaySpeed: 3000,       
    appendDots: (dots) => (
      <div>
        <ul style={{ margin: "0px", padding: "0px" }}> {dots} </ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  const images = [
    "https://ambraee.com/cdn/shop/files/WEDDING_CARNIVALS_copy.jpg?v=1732104476&width=1920",
    "https://ambraee.com/cdn/shop/files/jpeg-optimizer_SHAADI_KA_UTSAV_copy.jpg?v=1732104516&width=1920",
    "https://ambraee.com/cdn/shop/files/jpeg-optimizer_SAREES_copy_3c7b99af-1533-422c-b9ad-d3fd3973d973.jpg?v=1732105277&width=1920",
  ];

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index + 1}`} className="carousel-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
