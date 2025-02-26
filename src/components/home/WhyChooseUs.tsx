import Image from "next/image";

const features = [
  {
    id: 1,
    title: "Low in Calories",
    description:
      "Shirataki Rice is naturally low in calories, making it perfect for weight loss.",
    imgSrc: "https://cdn-icons-png.flaticon.com/512/1048/1048953.png",
    shadowColor: "hover:shadow-red-500/50",
  },
  {
    id: 2,
    title: "Gluten-Free",
    description:
      "A great choice for people with gluten intolerance or celiac disease.",
    imgSrc: "https://cdn-icons-png.flaticon.com/512/1121/1121545.png",
    shadowColor: "hover:shadow-orange-400/50 hover:shadow-yellow-400/50",
  },
  {
    id: 3,
    title: "Rich in Fiber",
    description: "Promotes digestion and helps maintain a healthy gut.",
    imgSrc: "https://cdn-icons-png.flaticon.com/512/4080/4080032.png",
    shadowColor: "hover:shadow-red-500/50",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-16 px-8 text-center w-[80%] mx-auto">
      <h2 className="custom-font text-4xl text-gray-800 mb-8">
        Why Choose Shirataki Rice?
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature) => (
          <div
            key={feature.id}
            className={`p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 border-t-4 border-[#FFD700] text-center ${feature.shadowColor}`}
          >
            <div className="relative w-20 h-20 mx-auto mb-4">
              <img
                src={feature.imgSrc}
                alt={feature.title}
                className="transition-transform transform hover:scale-110"
              />
            </div>
            <h3 className="text-2xl font-semibold text-[#A73F3C]">
              {feature.title}
            </h3>
            <p className="text-gray-700 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
