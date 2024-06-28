import { contactPhoto } from "../../assets";

const ContactIntro = () => {
  return (
    <div className="container mx-auto sm:px-16 px-6 my-20">
      <div className="flex">
        <div className="flex-1">
        <h1 className="mb-6 text-2xl sm:text-4xl md:text-5xl text-center font-bold">
            Contact Us
          </h1>
          <p className="text-xl sm:text-2xl text-center">
            Welcome to our Cleaning Service! We are dedicated to providing you
            with the highest quality cleaning solutions for your home or office.
          </p>
        </div>

        <div className="flex-1">
            <img src={contactPhoto} alt="contact-img" />
        </div>
      </div>
    </div>
  );
};

export default ContactIntro;
