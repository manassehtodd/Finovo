import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import { EffectCoverflow, Navigation } from "swiper/modules";

import reviewImg from "./../assets/images/reviewPic.jpg";
import reviewImg2 from "./../assets/images/reviewPic2.jpg";
import reviewImg3 from "./../assets/images/reviewPic3.jpg";
import reviewImg4 from "./../assets/images/reviewPic4.jpg";
import reviewImg5 from "./../assets/images/reviewPic5.jpg";
import reviewImg6 from "./../assets/images/reviewPic6.jpg";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    { img: reviewImg, 
      text: "This app has transformed the way I manage my daily tasks and stay organized.", 
      name: "John Doe", 
      rating: "⭐⭐⭐⭐⭐" },
    { img: reviewImg2, 
      text: "I love how easy it is to use and customize my tasks.", 
      name: "Jane Smith", 
      rating: "⭐⭐⭐⭐" },
    { img: reviewImg3, 
      text: "The interface is intuitive and the features are well thought out.", 
      name: "Michael" , 
      rating: "⭐⭐⭐⭐⭐"},
    { img: reviewImg4, 
      text: "I've been using this app for months and it's been a game-changer.", 
      name: "Sarah" , 
      rating: "⭐⭐⭐⭐"},
    { img: reviewImg5, 
      text: "This app has helped me stay productive and focused.", 
      name: "Daniel" , 
      rating: "⭐⭐⭐⭐⭐"},
    { img: reviewImg6, 
      text: "The app is incredibly user-friendly and efficient.", 
      name: "Emma" , 
      rating: "⭐⭐⭐⭐⭐"},
  ];

  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="mt-12">

        <Swiper
          onSlideChange={(swiper) =>
            setActiveIndex(swiper.realIndex)
          }
          effect="coverflow"
          centeredSlides={true}
          slidesPerView="auto"
          grabCursor={true}
          loop={false}
          modules={[EffectCoverflow, Navigation]}
          navigation={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 150,
            modifier: 2,
            slideShadows: false,
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index} className="w-40!">
              <img
                src={item.img}
                className="h-40 w-40 rounded-xl border-4 border-white object-cover"
                alt={item.name}
              />
            </SwiperSlide>
          ))}
          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow h-12 w-12"></div>
          </div>
        </Swiper>

        <div className="mt-8 text-center max-w-2xl mx-auto">
          <span>
            {testimonials[activeIndex].rating}
          </span>
          <p className="text-gray-600 italic">
            "{testimonials[activeIndex].text}"
          </p>
          <p className="mt-2 font-semibold">
            {testimonials[activeIndex].name}
          </p>
        </div>

      </div>
    </section>
  );
}

export default Testimonial;