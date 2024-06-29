import { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <div className="bg-[#13294A]">
        <div className="flex justify-center items-center p-2">
          <div className="flex items-center gap-2">
            <FaPhoneAlt style={{ color: "#3BB1B9" }} />
            <p className="text-[white] text-[18px] font-medium">
              +447438712348
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto sm:px-16 px-6">
        <nav className="w-full flex items-center justify-between py-6 navbar">
          <div className="">
            <p className="font-bold text-2xl md:text-3xl">
              Eco <span className="text-lightBlue">Cleaning</span>
            </p>
          </div>

          <div className="items-center hidden md:flex justify-between">
            <ul className="flex items-center justify-between">
              <li
                className={`uppercase text-sm font-bold ${
                  active === "Home" ? "text-black" : "text-linkColor"
                } mr-10`}
                onClick={() => setActive("Home")}
              >
                <Link to="/">Home</Link>
              </li>
              <li
                className={`uppercase text-sm font-bold ${
                  active === "About" ? "text-black" : "text-linkColor"
                } mr-10`}
                onClick={() => setActive("About")}
              >
                <Link to="/about">About</Link>
              </li>
              <li
                className={`uppercase text-sm font-bold ${
                  active === "Services" ? "text-black" : "text-linkColor"
                } mr-10`}
                onClick={() => setActive("Services")}
              >
                <Link to="/services">Services</Link>
              </li>
              <li
                className={`uppercase text-sm font-bold ${
                  active === "FAQ" ? "text-black" : "text-linkColor"
                } mr-10`}
                onClick={() => setActive("FAQ")}
              >
                <Link to="/faq">FAQ</Link>
              </li>
              <li
                className={`uppercase text-sm font-bold ${
                  active === "Contact" ? "text-black" : "text-linkColor"
                } mr-10`}
                onClick={() => setActive("Contact")}
              >
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
            <button className="bg-accentColor px-4 sm:px-5 md:px-6 lg:px-6 xl:px-6 py-2 sm:py-2 md:py-3 lg:py-3 xl:py-3 rounded-[10px] text-[15px] font-semibold border-none outline-none">
              BOOK NOW
            </button>
          </div>

          <div className="md:hidden flex flex-1 justify-end items-center">
            <button onClick={() => setToggle((prev) => !prev)}>
              {toggle ? (
                <IoClose style={{ width: "30px", height: "30px" }} />
              ) : (
                <IoMdMenu style={{ width: "30px", height: "30px" }} />
              )}
            </button>
            <div
              className={`${toggle ? "flex" : "hidden"}
        flex-col p-6 footer-bg absolute top-20 right-0
        mx-4 my-12 min-w-[140px] rounded-xl sidebar`}
            >
              <ul className="list-none flex flex-col justify-end items-center flex-1 gap-4 mb-6">
                <li
                  className={`uppercase text-sm font-bold ${
                    active === "Home" ? "text-black" : "text-linkColor"
                  } mr-10`}
                >
                  <Link to="/">Home</Link>
                </li>
                <li
                  className={`uppercase text-sm font-bold ${
                    active === "About" ? "text-black" : "text-linkColor"
                  } mr-10`}
                >
                  <Link to="/about">About</Link>
                </li>
                <li
                  className={`uppercase text-sm font-bold ${
                    active === "Services" ? "text-black" : "text-linkColor"
                  } mr-10`}
                >
                  <Link to="/services">Services</Link>
                </li>
                <li
                  className={`uppercase text-sm font-bold ${
                    active === "FAQ" ? "text-black" : "text-linkColor"
                  } mr-10`}
                >
                  <Link to="/faq">FAQ</Link>
                </li>
                <li
                  className={`uppercase text-sm font-bold ${
                    active === "Contact" ? "text-black" : "text-linkColor"
                  } mr-10`}
                >
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>

              <div className="">
                <button className="bg-accentColor px-4 py-2 sm:px-6 sm:py-3 rounded-[10px] text-sm sm:text-base md:text-lg lg:text-lg xl:text-x font-semibold border-none outline-none">
                  BOOK NOW
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
