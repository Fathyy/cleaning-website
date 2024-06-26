import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
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
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={50}
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          breakpoints={{
            0: {slidesPerView: 1},
            // when window width is >= 640px
            768: {
              slidesPerView: 2,
            },
            // when window width is >= 768px
            1024: {
              slidesPerView: 3,
            },
          }}
        >

          {services.map((service) => (
            <SwiperSlide
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
