import { mwanaisha, quoteIcon } from "../../assets";

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
      <div className="p-12 testimonial-bg relative bg-cover rounded-[26px] mt-14">
        <p className="text-white text-center text-[18px] font-normal leading-[28px]">
          Absolutely thrilled with the cleaning service! The team arrived on
          time and got straight to work. Every corner of my home has been
          touched with their magic and it has never been cleaner. Their
          attention to detail is commendable and the professionalism they
          displayed was truly top-notch. I am extremely satisfied and would
          highly recommend their services to everyone!{" "}
        </p>
        <img
          src={mwanaisha}
          alt="testimonial-image"
          className="absolute w-[108px] h-[108px] transform -translate-x-1/2 left-1/2"
        />
        <img
          src={quoteIcon}
          alt="quote icon"
          className="absolute top-[-15%] left-[3%] w-[54px] h-[54px]"
        />
      </div>
    </div>
  );
};

export default Testimonials;
