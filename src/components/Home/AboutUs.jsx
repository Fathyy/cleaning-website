import { aboutPic, aboutPic2 } from "../../assets";
import { FaCheckCircle } from "react-icons/fa";

export default function AboutUs() {
  return (
    <div className="container mx-auto sm:px-16 px-6 my-20">
      <div className="flex gap-12">
        <div className="relative flex-1">
          <img
            src={aboutPic}
            alt=""
            className="absolute bottom-[-15%] right-0 z-10"
            style={{ width: "60%", border: "7px solid white" }}
          />{" "}
          {/* Position first image */}
          <img
            src={aboutPic2}
            alt=""
            className="relative z-0"
            style={{ width: "100%" }}
          />{" "}
          {/* Position second image */}
        </div>

        <div className="flex-1">
          <h3 className="text-lightBlue text-4xl font-bold mb-4">About Us</h3>
          <h2 className="mb-6 text-4xl font-semibold">Your Trusted Cleaning Partner</h2>
          <p className="mb-6">
            Professional Deep Cleaning Services 1217 specializes in providing
            top-tier cleaning services. Our mission is to offer clients the
            freedom to focus on their passions and important activities by
            taking over the mundane task of cleaning.
          </p>

          <div className="mt-6">
            <div className="flex items-center gap-4 mb-4">
              <FaCheckCircle style={{ color: "#D3B018", fontSize: "25px" }} />
              <div className="flex-1">
                <h5 className="font-semibold text-xl">
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
              <h5 className="font-semibold text-xl">Customer Satisfaction</h5>
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
              <h5 className="font-semibold text-xl">
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
