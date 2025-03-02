"use client";

import { Product } from "@prisma/client";
import Image from "next/image";
import { useState } from "react";

export function ProductDetails({ product }: { product: Product }) {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [selectedPack, setSelectedPack] = useState(product.packs[0]);

  const discountedPrice = product.discount
    ? (product.price * (1 - product.discount / 100)).toFixed(2)
    : product.price.toFixed(2);

  return (
    <div className="bg-white">
      {/* Full-screen image carousel */}
      <div className="relative w-full max-w-3xl mx-auto">
        <Image
          src={selectedImage}
          alt={product.name}
          width={600}
          height={400}
          className="w-full h-96 object-cover rounded-lg shadow-md"
        />
        {/* Thumbnail images */}
        <div className="flex mt-4 justify-center gap-2 overflow-x-auto">
          {product.images.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={`${product.name} - Image ${index + 1}`}
              width={80}
              height={80}
              className={`w-20 h-20 object-cover rounded-md cursor-pointer border-2 transition-all ${
                selectedImage === img ? "border-blue-500 scale-105" : "border-gray-300 hover:border-gray-500"
              }`}
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>
      </div>

      {/* Product details */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left column */}
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
            <p className="text-lg text-gray-600 mb-6">{product.description}</p>
            
            {/* Pricing */}
            <div className="flex items-baseline space-x-3 mb-6">
              <span className="text-4xl font-semibold text-blue-600">₹{discountedPrice}</span>
              {product.discount && product.discount > 0 && (
                <>
                  <span className="text-xl text-gray-500 line-through">₹{product.price.toFixed(2)}</span>
                  <span className="ml-2 text-lg font-medium text-green-500">Save {product.discount}%</span>
                </>
              )}
            </div>

            {/* Pack Options */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Select Pack:</h3>
              <div className="flex flex-wrap gap-3">
                {product.packs.map((pack, index) => (
                  <button
                    key={index}
                    className={`px-5 py-2 rounded-full text-lg font-medium transition-colors ${
                      selectedPack === pack
                        ? "bg-blue-600 text-white shadow-md"
                        : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                    }`}
                    onClick={() => setSelectedPack(pack)}
                  >
                    {pack}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <button className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
                Add to Cart
              </button>
              <button className="flex-1 bg-orange-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors">
                Buy Now
              </button>
            </div>
          </div>

          {/* Right column */}
          <div>
            {/* About Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">About This Product</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {product.about.map((point, index) => (
                  <li key={index} className="text-lg">{point}</li>
                ))}
              </ul>
            </div>

            {/* Features Section */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Key Features</h2>
              <div className="flex flex-wrap gap-2">
                {product.features.map((feature, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
