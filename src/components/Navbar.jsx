import { FaPhoneAlt } from "react-icons/fa";
// import { MdOutlineMail } from "react-icons/md";

export default function Navbar() {
  return (
    <div>
        <div className="bg-[#13294A]">
            <div className="flex justify-center items-center p-2">
                <div className="flex items-center gap-2">
                    <FaPhoneAlt style={{color: '#3BB1B9'}}/>
                    <p className="text-[white] text-[18px] font-medium">+447438712348</p>
                </div>
                {/* <div className="">
                    <MdOutlineMail />
                    <p>7373773737</p>
                </div> */}
            </div>

        </div>

        <div className="container mx-auto sm:px-16 px-6">
            <nav className="flex items-center justify-between py-6">
                <div className="">
                    <p className="font-bold text-xl">Cleaning <span className="text-lightBlue">Services</span></p>
                </div>

                <ul className="flex items-center gap-5">
                    <li className="uppercase text-sm font-bold">Home</li>
                    <li className="uppercase text-sm font-bold">About</li>
                    <li className="uppercase text-sm font-bold">Services</li>
                    <li className="uppercase text-sm font-bold">FAQ</li>
                    <li className="uppercase text-sm font-bold">Contact</li>
                </ul>

                <div className="">
                    <button className="bg-accentColor px-6 py-3 rounded-[10px] text-[15px] font-semibold border-none outline-none">BOOK NOW</button>
                </div>
            </nav>
        </div>
    </div>
  )
}
