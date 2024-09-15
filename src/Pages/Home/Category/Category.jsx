import Slider from "react-slick";
import pizza from "../../../assets/home/slide1.jpg";
import salad from "../../../assets/home/slide2.jpg";
import soup from "../../../assets/home/slide3.jpg";
import dessert from "../../../assets/home/slide4.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Category = () => {
  // Array of menu items
  const menuItems = [
    { id: 1, name: "Pizza", imgSrc: pizza, altText: "Pizza" },
    { id: 2, name: "Salad", imgSrc: salad, altText: "Salad" },
    { id: 3, name: "Soup", imgSrc: soup, altText: "Soup" },
    { id: 4, name: "Dessert", imgSrc: dessert, altText: "Dessert" },
  ];

  const settings = {
    dots: true, // Adds navigation dots
    infinite: true, // Allows infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 3, // Number of slides to show
    slidesToScroll: 1, // Number of slides to scroll at once
    autoplay: true, // Enables autoplay
    autoplaySpeed: 2000, // Autoplay interval
    responsive: [
      {
        breakpoint: 1024, // For screens smaller than 1024px
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // For screens smaller than 768px
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full p-4 overflow-hidden mb-10">
      <Slider {...settings}>
        {menuItems.map((item) => (
          <div key={item.id} className="relative uppercase text-center">
            <img
              src={item.imgSrc}
              alt={item.altText}
              className="w-full h-72 object-cover p-4"
            />
            <p className="absolute bottom-9 left-0 right-0 text-black text-2xl">
              {item.name}
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Category;
