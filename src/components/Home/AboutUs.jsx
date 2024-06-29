import { cleaningCrew, cleaningCustom } from "../../assets";
import { FaCheckCircle } from "react-icons/fa";

export default function AboutUs() {
  return (
    <div className="container mx-auto sm:px-16 px-6 my-32">
      <div className="flex flex-col-reverse lg:flex-row gap-12">
        <div className="relative flex-1 self-start">
          <img
            src={cleaningCrew}
            alt=""
            className="absolute bottom-[-15%] right-0 z-10 w-3/5 border-0 sm:border-7"
            // style={{ width: "60%", border: "7px solid white" }}
          />{" "}
          <img
            src={cleaningCustom}
            alt=""
            className="relative z-0 w-full h-[50%]"
            // style={{ width: "100%" }}
          />{" "}
        </div>

        <div className="flex-1">
          <h3 className="text-lightBlue text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center sm:text-start">About Us</h3>
          <h2 className="mb-6 text-2xl sm:text-3xl md:text-4xl font-semibold text-center sm:text-start">
            Your Trusted Cleaning Partner
          </h2>
          <p className="mb-6 text-center sm:text-start">
            Professional Deep Cleaning Services 1217 specializes in providing
            top-tier cleaning services. Our mission is to offer clients the
            freedom to focus on their passions and important activities by
            taking over the mundane task of cleaning.
          </p>

          <div className="mt-6">
            <div className="flex items-center gap-4 mb-4">
              <FaCheckCircle style={{ color: "#D3B018", fontSize: "25px" }} />
              <div className="flex-1">
                <h5 className="font-semibold text-lg md:text-xl">
                  Commitment to excellence
                </h5>
                <p className="text-[#808080]">
                  Our commitment to excellence ensures that we deliver top-notch
                  cleaning services that exceed your expectations every time.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <FaCheckCircle style={{ color: "#D3B025", fontSize: "25px" }} />
              <div className="flex-1">
                <h5 className="font-semibold text-lg md:text-xl">
                  Customer Satisfaction
                </h5>
                <p className="text-[#808080]">
                  {" "}
                  We listen to your needs, provide personalized cleaning
                  solutions, and strive to make your experience with us a
                  delightful one.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <FaCheckCircle style={{ color: "#D3B025", fontSize: "25px" }} />
              <div className="flex-1">
                <h5 className="font-semibold text-lg md:text-xl">
                  Superior Cleaning service
                </h5>
                <p className="text-[#808080]">
                  Our professional team uses eco-friendly products and advanced
                  techniques to deliver a spotless, healthy space for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
