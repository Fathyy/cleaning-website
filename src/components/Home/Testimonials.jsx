import { testimonials } from "../../Constants";
import { quoteIcon } from "../../assets";

const Testimonials = () => {
  return (
    <div className="mb-18 container mx-auto sm:px-16 px-6">
      <div className="flex flex-col items-center mb-4">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-lightBlue">
          What our clients say
        </h2>
        <p className="text-[#333] text-[18px] font-normal leading-[26px]">
          We are proud to share the testimonials from our clients who have
          experienced our exceptional cleaning services. Their words of
          appreciation inspire us to strive for excellence and reaffirm our
          commitment to providing a clean and healthy environment.
        </p>
      </div>

      {/* testimonials box */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {testimonials.map((review) => (
          <div className="p-12 testimonial-bg relative bg-cover rounded-[26px] mt-14" key={review.id}>
            <p className="text-white text-center text-[18px] font-normal leading-[28px]">
              {review.content}
            </p>
            <img
              src={review.img}
              alt="testimonial-image"
              className="absolute w-[108px] h-[108px] rounded-full transform -translate-x-1/2 left-1/2"
            />
            <img
              src={quoteIcon}
              alt="quote icon"
              className="absolute top-[-5%] left-[3%] w-[40px] h-[40px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
