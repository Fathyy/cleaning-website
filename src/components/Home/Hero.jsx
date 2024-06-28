
export default function Navbar() {
 
  return (
    <div className="relative">
      <div className="bg-opacity-60 absolute inset-0 bg-black"></div>
      <div className="flex items-start md:items-center justify-center bg-[url('./assets/cleaning-background.jpg')] bg-cover bg-center">
        <div className="my-20 w-full md:w-3/4 lg:w-1/2 flex justify-between items-center flex-col z-10">
          <h1 className="mb-6 text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center text-white font-bold">
            Professional Deep Cleaning Services 1217
          </h1>
          <p className="text-xl sm:text-2xl xl:text-3xl md:text-2xl lg:text-2xl text-white text-center">
            Welcome to our Cleaning Service! We are dedicated to providing you
            with the highest quality cleaning solutions for your home or office.
            Start your journey towards a cleaner space today!
          </p>

          <div className="mt-8">
            <button className="bg-accentColor px-4 sm:px-5 md:px-6 lg:px-6 xl:px-6 py-2 sm:py-2 md:py-3 lg:py-3 xl:py-3 rounded-[10px] text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl font-semibold border-none outline-none">
              GET YOUR SERVICE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
