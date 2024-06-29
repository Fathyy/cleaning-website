import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-16">
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="flex-1 mr-8 mb-8 lg:mb-0">
          <h2 className="font-bold text-2xl md:text-3xl text-white mb-4">
            Cleaning Services
          </h2>
          <p className="text-[#fff] text-lg md:text-xl font-light leading-[26px]">
            Professional Deep Cleaning Services 1217 specializes in providing
            top-tier cleaning services. Our mission is to offer clients the
            freedom to focus on their passions and important activities by
            taking over the mundane task of cleaning.
          </p>
          <div className="flex gap-6 mt-7">
            <FaFacebook style={{ color: "white", fontSize: "24px" }} />
            <FaInstagram style={{ color: "white", fontSize: "24px" }} />
            <FaYoutube style={{ color: "white", fontSize: "24px" }} />
            <FaTwitter style={{ color: "white", fontSize: "24px" }} />
          </div>
        </div>

        <div className="flex-1 flex flex-col md:flex-row justify-between">
          <div className="flex flex-col lg:mr-8 mb-8 md:mb-0">
            <h4 className="text-white text-[24px] font-bold">About</h4>
            <ul className="">
              <li className="text-white text-[16px] font-normal leading-[40px]">
                <Link to="#">Services</Link>
              </li>
              <li className="text-white text-[16px] font-normal leading-[40px]">
                <Link to="#">Contact</Link>
              </li>
              <li className="text-white text-[16px] font-normal leading-[40px]">
                <Link to="#">FAQ</Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col lg:mr-8 ">
            <h4 className="text-white text-2xl md:text-3xl font-bold">
              Contact Us
            </h4>
            <ul className="">
              <li className="flex items-center gap-2 md:mb-6 text-white text-lg md:text-xl font-normal leading-[40px]">
                <IoLocationSharp />
                <Link to="#">OL16 Newhey Road Milnrow Rochdale Manchester</Link>
              </li>
              <li className="flex items-center gap-2 md:mb-6 text-white text-lg md:text-xl font-normal leading-[40px]">
                <FaPhoneAlt />
                <Link to="#">+44 7438 712348</Link>
              </li>
              <li className="flex items-center gap-2 md:mb-6 text-white text-lg md:text-xl font-normal leading-[40px]">
                <MdOutlineEmail />
                <Link to="#">info@acaademicnow.org</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full mt-2">
        <div className="divider"></div>
      </div>
      <div className="flex items-center justify-between mt-6 text-white">
        <p className="">&copy; 2024 Cleaning Services</p>
        <div className="flex items-center gap-6">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
