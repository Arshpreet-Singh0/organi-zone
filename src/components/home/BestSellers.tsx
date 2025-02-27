import Image from "next/image";

const BestSellers = () => {
  const products = [
    {
      name: 'Shirataki Rice',
      price: '$10.99',
      image: 'https://m.media-amazon.com/images/I/91-mH6FVnHL._AC_UF1000,1000_QL80_.jpg',
    },
    {
      name: 'Shirataki Rice',
      price: '$10.99',
      image: 'https://m.media-amazon.com/images/I/91-mH6FVnHL._AC_UF1000,1000_QL80_.jpg',
    },
    {
      name: 'Shirataki Rice',
      price: '$10.99',
      image: 'https://m.media-amazon.com/images/I/91-mH6FVnHL._AC_UF1000,1000_QL80_.jpg',
    },
  ];

  return (
    <section className="py-16 px-8 bg-gray-100 text-center m-10 rounded-lg w-full max-w-[1300px] mx-auto">
      <h2 className="text-4xl text-gray-900 mb-8 custom-font">Top Picks for You</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 border-t-4 border-[#FFD700] text-center hover:shadow-yellow-400/50"
          >
            <Image
              src={product.image}
              width={500}
              height={500}
              alt={product.name}
              className="w-full h-60 object-cover rounded-md hover:scale-110 transition-transform duration-300"
            />
            <h3 className="text-2xl font-semibold mt-4 text-gray-800">{product.name}</h3>
            <p className="text-gray-700 text-lg font-medium mt-1">{product.price}</p>
            <button className="mt-4 px-6 py-3 bg-[#FFD700] text-[#A73F3C] font-bold rounded-xl text-lg hover:bg-yellow-400 transition w-full shadow-md hover:shadow-lg">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      text: `Absolutely love this rice! It's low-calorie and super easy to cook.`,
      author: 'Emily R.',
    },
    {
      text: `Perfect for my keto diet. Feels like eating real rice without the carbs!`,
      author: 'John D.',
    },
  ];
  

  return (
    <section className="py-16 px-8 bg-gray-100 text-center rounded-lg m-10 w-full max-w-[1300px] mx-auto shadow-lg shadow-gray-700">
      <h2 className="custom-font text-4xl text-[#FFD700] mb-8">What Our Customers Say</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {reviews.map((review, index) => (
          <div key={index} className="bg-[#F4EAE0] p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <p className="text-[#0F4C5C] italic">{review.text}</p>
            <h4 className="mt-4 font-bold text-[#0F4C5C]">- {review.author}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

const BestSellersAndTestimonials = () => {
  return (
    <div>
      <BestSellers />
      <Testimonials />
    </div>
  );
};

export default BestSellersAndTestimonials;
