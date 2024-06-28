import { aboutPhoto } from "../../assets";

export default function IntroAbout() {
  return (
    <div className="container mx-auto sm:px-16 px-6 my-20">
      <div className="flex flex-col-reverse lg:flex-row gap-12">
        <div className="flex-1">
          <h3 className="text-lightBlue text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center sm:text-start">
            About Company
          </h3>
          <h2 className="mb-6 text-2xl sm:text-3xl md:text-4xl font-semibold text-center sm:text-start">
            Your Trusted Cleaning Partner
          </h2>
          <p className="mb-6 text-center sm:text-start">
            Professional Deep Cleaning Services 1217 specializes in providing
            top-tier cleaning services. Our mission is to offer clients the
            freedom to focus on their passions and important activities by
            taking over the mundane task of cleaning. We pride ourselves on our
            attention to detail and our commitment to providing the highest
            level of service. Our team of trained professionals uses the latest
            cleaning techniques and eco-friendly products to ensure a clean and
            healthy environment. We tailor our services to meet the unique needs
            of each client, ensuring a personalized cleaning experience every
            time.
          </p>
        </div>

        <div className="relative flex-1">
          <img src={aboutPhoto} alt="" className="" />{" "}
        </div>
      </div>
    </div>
  );
}
