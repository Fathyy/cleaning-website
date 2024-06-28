import { services } from "../../Constants";

export default function ServicesList() {
  return (
    <div className="bg-[#F5F5F5]  py-32">
      <div className="container mx-auto sm:px-16 px-6">
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-1 flex flex-col items-center"
            >
              <img
                src={service.img}
                alt="service image"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="p-2">
                <h5 className="text-[#1C1C1C] text-[22px] font-semibold text-center">
                  {service.title}
                </h5>
                <p className="text-center mb-6">{service.content}</p>
              </div>
              <div className="flex items-center justify-center">
                <button className="mb-6 text-[#1C1C1C] font-semibold bg-[#FFCF59] rounded-[13px] text-base md:text-lg px-4 p-2 md:px-6 md:py-3">
                  Book Service
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
