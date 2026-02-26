import Slider from "./Slider.tsx";
import SliderContent from "./SliderContent.jsx";
import content from "./Contentdetails.jsx";

function renderSliderContent(item) {
  return (
    <SliderContent
      key={item.id}
      img={item.img}
      text={item.text}
      name={item.name}
    />
  );
}

function Testimonial() {
  return (
    <section
      id="testimonial"
      className="bg-gray-100 px-4 sm:px-6 md:px-12 lg:px-20 py-16 md:py-24 overflow-hidden"
    >
      {/* HEADER */}
      <div className="flex justify-center text-center">
        <div className="max-w-2xl">
          <p className="text-sm tracking-widest mb-3">TESTIMONIAL</p>

          <h1 className="
            text-2xl 
            sm:text-3xl 
            md:text-4xl 
            lg:text-5xl 
            font-bold 
            leading-tight
          ">
            USER REVIEWS AND EXPERIENCES
          </h1>

          <button className="
            mt-6 
            px-6 
            py-3 
            bg-black 
            text-white 
            rounded-full 
            hover:bg-gray-800 
            transition
            cursor-pointer
          ">
            Explore All
          </button>
        </div>
      </div>

      {/* SLIDER */}
      <div className="mt-12 md:mt-16">
        <Slider>
          {content.map(renderSliderContent)}
        </Slider>
      </div>
    </section>
  );
}

export default Testimonial;
