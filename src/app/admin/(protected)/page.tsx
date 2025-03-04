import prisma from '@/db';
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const getProducts = async () => {
  return await prisma.product.findMany({});
};

export default async function Page() {
  const products = await getProducts();

  return (
    <div className="w-full min-h-screen bg-white py-10">
      <div className="w-[90%] max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            {/* Product Image */}
            <div className="w-full h-48 flex justify-center items-center bg-gray-200">
              <img
                src={product.images?.[0] || "/placeholder.jpg"}
                alt={product.name}
                className="object-cover h-full w-full"
              />
            </div>

            {/* Product Details */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
              <p className="text-sm text-gray-600 truncate">{product.description}</p>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-lg font-bold text-blue-600">₹{product.price}</span>
                {product.discount && product?.discount > 0 && (
                  <span className="text-sm text-red-500">-{product.discount}%</span>
                )}
              </div>
            </div>

            {/* Manage Button */}
            <div className="p-4 border-t flex justify-between items-center">
              <Button variant="outline" asChild>
                <Link href={`/manage-product/${product.id}`}>Manage</Link>
              </Button>
              <Button variant="destructive">Delete</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
