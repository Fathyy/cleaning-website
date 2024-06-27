import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="mt-32 py-16 bg-[#F5F5F5] container mx-auto sm:px-16 px-6">
      <div className="flex flex-col items-center mb-8">
        <h2 className="text-[#2A3280] text-3xl mb-2 font-bold">Contact Us</h2>
        <p className="text-[#717171] text-[18px] font-normal">
          Any question or remarks? Just write us a message!
        </p>
      </div>

      {/* box */}
      <div className="flex gap-4 bg-white">
        <div className="contact-gradient px-6 py-12 rounded-lg">
          <div className="mb-8">
            <h4 className="text-white text-[28px] font-semibold">
              Contact Information
            </h4>
            <p className="text-[#C9C9C9] text-[18px] font-normal">
              Fill the form and we will get back to you
            </p>
          </div>
          <div className="flex items-center gap-4 mb-6 mt-32">
            <FaPhoneAlt style={{ fontSize: "24px", color: "white" }} />
            <p className="text-white text-[16px] font-normal">
              Tel. +447438712348
            </p>
          </div>
          <div className="flex items-center gap-4 mb-6">
            <MdOutlineEmail style={{ fontSize: "24px", color: "white" }} />
            <p className="text-white text-[16px] font-normal">
              info@acaademicnow.org
            </p>
          </div>
          <div className="flex items-center gap-4 mb-6">
            <IoLocationSharp style={{ fontSize: "24px", color: "white" }} />
            <p className="text-white text-[16px] font-normal">
            OL16 Newhey Road Milnrow Rochdale Manchester
            </p>
          </div>
        </div>

        <div className="mt-8 p-6">
          <form action="w-100%">
            <div className="flex gap-4 mb-8">
              <div className="flex flex-col">
                <label htmlFor="name" className="mb-4">
                  First Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Arthur"
                  className="px-4 py-2 border border-linkColor rounded-[3px] outline-0"
                ></input>
              </div>

              <div className="flex flex-col">
                <label htmlFor="name" className="mb-4">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lname"
                  className="px-4 py-2 border border-linkColor rounded-[3px] outline-0"
                  placeholder="Nyakundi"
                ></input>
              </div>
            </div>

            <div className="flex gap-4 mb-8">
              <div className="flex flex-col">
                <label htmlFor="name" className="mb-4">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="px-4 py-2 border border-linkColor rounded-[3px] outline-0"
                  placeholder="example@gmail.com"
                ></input>
              </div>

              <div className="flex flex-col">
                <label htmlFor="name" className="mb-4">
                  Phone Number
                </label>
                <input
                  type="phone"
                  id="name"
                  className="px-4 py-2 border border-linkColor rounded-[3px] outline-0"
                  placeholder="+254-702-567-012"
                ></input>
              </div>
            </div>

            {/* choose subject*/}
            <div>
              <div className="flex flex-col my-4">
                <label
                  htmlFor=""
                  className="text-black text-[15px] font-bold leading-[20px] mb-2"
                >
                  Message
                </label>
                <textarea
                  name=""
                  id=""
                  cols="10"
                  rows="5"
                  placeholder="Write your message"
                  className="p-4 border-b border-[#8D8D8D] rounded-[3px] outline-0"
                ></textarea>
              </div>
            </div>

            <div className="flex items-center justify-end">
              <button className="text-[white] font-medium text-[16px] button-contact px-8 py-4 mb-6">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
