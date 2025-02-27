import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="hero bg-gray-100 w-full max-w-[1300px] h-[500px] text-[#A73F3C] m-10 rounded-xl flex items-center justify-center relative shadow-lg shadow-gray-400 overflow-hidden">
        {/* Left Content */}
        <div className="w-1/2 p-10">
          <h1 className="text-6xl font-black uppercase leading-tight transition-all duration-300 group hover:text-[#A73F3C] hover:scale-105">
            Eat Smart <br />
            <span className="text-[#FFD700] group-hover:text-[#A73F3C] font-sigmar">
              Stay Healthy
            </span>
          </h1>
          <p className="text-lg text-gray-700 mt-4">
            Low in calories, gluten-free, and rich in fiber—Shirataki Rice is
            your perfect choice for a healthy lifestyle. Made from Konjac root,
            it supports weight loss and improves digestion.
          </p>
          <div className="mt-6 flex space-x-4">
            <a
              href="#"
              className="px-6 py-3 bg-[#FFD700] text-[#A73F3C] font-bold rounded-lg shadow-md hover:bg-yellow-400 transition transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/50 duration-300"
            >
              Order Now
            </a>
            <a
              href="#"
              className="px-6 py-3 border-2 border-[#FFD700] text-[#FFD700] font-bold rounded-lg hover:bg-[#FFD700] hover:text-[#A73F3C] transition transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/50 duration-300"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Right Content (Image) */}
        <div className="w-1/2 flex justify-center items-center">
          <Image
            src="https://m.media-amazon.com/images/I/91-mH6FVnHL._AC_UF1000,1000_QL80_.jpg"
            width={300}
            height={300}
            className="max-w-xs md:max-w-sm rounded-lg shadow-2xl transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/50 duration-300"
            alt="Shirataki Rice"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
