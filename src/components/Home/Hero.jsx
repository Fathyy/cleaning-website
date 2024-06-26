export default function Hero() {
  return (
    <div className="flex items-center justify-center bg-[url('./assets/cleaning-background.jpg')] bg-cover bg-center h-screen">
      <div className="w-[60%] flex justify-between items-center flex-col">
        <h1 className="mb-6 text-7xl text-center text-white font-bold">
          Professional Deep Cleaning Services 1217
        </h1>
        <p className="text-3xl text-white text-center">
          Welcome to our Cleaning Service! We are dedicated to providing you
          with the highest quality cleaning solutions for your home or office.
          Start your journey towards a cleaner space today!
        </p>

        <div className="mt-8">
          <button className="bg-accentColor px-6 py-3 rounded-[10px] text-[18px] font-semibold border-none outline-none">
            GET YOUR SERVICE
          </button>
        </div>
      </div>
    </div>
  );
}
