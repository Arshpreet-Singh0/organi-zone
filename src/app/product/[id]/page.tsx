import prisma from "@/db";
import { Product } from '@prisma/client';
import { ProductDetails } from '@/components/product/ProductDetails';

const getProduct = async (id: number): Promise<Product | null> => {
  try {
    return await prisma.product.findUnique({
      where: {
        id: Number(id)
      }
    });
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
};

export default async function ProductPage({ params }: {
  params: Promise<{
    id: number
  }>
}) {
  const id = (await params).id;
  const product = await getProduct(id);

  if (!product) {
    return (
      <div className="min-h-screen w-full bg-white py-10 flex items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-800">Product Not Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-gray-50 py-10">
      <ProductDetails product={product} />
    </div>
  );
}

