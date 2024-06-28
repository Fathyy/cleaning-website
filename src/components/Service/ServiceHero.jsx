export default function ServiceHero() {
  return (
    <div className="relative">
      <div className="bg-opacity-60 absolute inset-0 bg-black"></div>
      <div className="flex items-start md:items-center justify-center bg-[url('./assets/about-photo.jpg')] bg-cover bg-center h-[70vh]">
        <div className="my-20 w-full md:w-3/4 lg:w-1/2 flex justify-between items-center flex-col z-10">
          <h1 className="mb-6 text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center text-white font-bold">
            Our Services
          </h1>
          <p className="text-xl sm:text-2xl xl:text-3xl md:text-2xl lg:text-2xl text-white text-center">
            At Professional Deep Cleaning Services 1217, we offer a wide range
            of services designed to meet all your cleaning needs. 
          </p>
        </div>
      </div>
    </div>
  );
}
