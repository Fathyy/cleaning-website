import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { services } from "../../Constants";

export default function Services() {
  

  return (
    <div className="bg-[#F5F5F5] my-32 py-16">
      <div className="container mx-auto sm:px-16 px-6">
        <div className="mt-8">
          <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-lightBlue">
            Our Services
          </h2>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >

          {services.map((service) => (
            <SwiperSlide
              key={service.id}
              className="whyus-card bg-white border border-1 flex flex-col items-center"
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
                <button className="mb-6 text-[#1C1C1C] text-[14px] font-semibold bg-[#FFCF59] rounded-[13px] px-6 py-3">
                  GET STARTED
                </button>
              </div>
            </SwiperSlide>
          ))}
          </Swiper>
      </div>
    </div>
  );
}
