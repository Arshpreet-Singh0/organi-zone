"use client";

import Image from "next/image";
import { useState } from "react";
import { Product } from "@prisma/client";
import { Minus, Plus } from "lucide-react";
import { Button } from "../ui/button";

const ProductDetails = ({ product }: { product: Product }) => {
  const [selectedPack, setSelectedPack] = useState(product.packs[0]);
  const [mainImage, setMainImage] = useState(product.images?.[0]);
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    if (quantity == 1) return;

    setQuantity((q) => q - 1);
  };
  const handleIncrease = () => {
    if (quantity == 9) return;

    setQuantity((q) => q + 1);
  };

  return (
    <div className="w-full flex justify-center items-center px-4">
      <div className="w-full lg:w-[80%]">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Image Section */}
          <div className="w-full md:w-1/3 p-4 flex flex-col items-center">
            <Image
              src={mainImage}
              width={350}
              height={200}
              alt={product?.name}
              className="w-full max-h-96 object-contain rounded-lg"
            />

            <div className="grid grid-cols-4 md:grid-cols-5 gap-4 mt-5">
              {product?.images?.map((img, index) => (
                <Image
                  key={index}
                  src={img}
                  alt="Product variation"
                  width={80}
                  height={80}
                  className="cursor-pointer border-2 border-transparent hover:border-primary rounded-lg"
                  onClick={() => setMainImage(img)}
                />
              ))}
            </div>
          </div>

          {/* Details Section */}
          <div className="flex-1 p-4">
            <div className="flex flex-wrap gap-2 mb-4">
              {product?.features?.map((feature, index) => (
                <span
                  key={index}
                  className="p-1 px-4 bg-green-300 rounded-full text-green-900 text-sm"
                >
                  {feature}
                </span>
              ))}
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h1 className="text-2xl md:text-4xl font-bold mb-2">
                {product?.name}
              </h1>
              <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4">
                <div className="flex items-center text-yellow-400 text-lg">
                  ★★★★★{" "}
                  <span className="ml-2 text-gray-600 text-sm">
                    4.8 (1.2k reviews)
                  </span>
                </div>
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                  ⚡ 1,532 orders this week
                </div>
              </div>
            </div>

            {/* Price Section */}
            <div className="bg-white p-6 rounded-lg shadow-sm mt-4">
              <div className="flex items-baseline space-x-4">
                <span className="text-3xl md:text-4xl font-bold">
                  ₹{(product.price * (100 - (product.discount || 0))) / 100}
                </span>
                <span className="text-lg md:text-xl text-gray-500 line-through">
                  ₹{product.price}
                </span>
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
                  Save {product.discount}%
                </span>
              </div>
            </div>

            {/* Package Selection */}
            <div className="mt-4">
              <p className="text-sm md:text-base font-medium">
                Choose Package Size:
              </p>
              <div className="grid grid-cols-3 md:grid-cols-4 gap-2 mt-2">
                {product?.packs.map((pack, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedPack(pack)}
                    className={`col-span-1 border rounded-md p-2 text-center border-gray-200 font-semibold cursor-pointer text-sm md:text-base
                      ${
                        selectedPack === pack
                          ? "border-primary bg-gray-100"
                          : ""
                      }`}
                  >
                    {pack}
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-4">Quantity : </p>

            <div className="mt-4 flex gap-2">
              <button
                className="w-10 h-10 border border-gray-500 flex justify-center items-center rounded-md"
                onClick={handleDecrease}
              >
                <Minus />
              </button>
              <div className="w-10 h-10 border border-gray-500 flex justify-center items-center rounded-md font-bold">
                {quantity}
              </div>
              <button
                className="w-10 h-10 border border-gray-500 flex justify-center items-center rounded-md"
                onClick={handleIncrease}
              >
                <Plus />
              </button>
            </div>
            <div className="mt-4 flex gap-5">
              <Button className="py-6 bg-green-700 hover:bg-green-800 w-1/2">
                Add to cart
              </Button>
              <Button className="py-6 bg-red-600 hover:bg-red-700 flex-1">
                Buy Now
              </Button>
            </div>
          </div>
        </div>

        <div className="p-4">
          <p className="text-2xl font-semibold">{product.description}</p>
          <h2 className="font-semibold text-xl mb-2 mt-2">About:</h2>
          <ul className="list-disc list-outside pl-5 space-y-1 text-gray-700">
            {product?.about?.map((a, index) => (
              <li key={index}>{a}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
