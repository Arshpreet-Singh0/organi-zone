import prisma from "@/db";
import { authOptions } from "@/lib/auth";
import { productSchema } from "@/schemas/productSchema";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || session.user?.role!="admin") {
        return NextResponse.json(
            { error: "Unauthorized: Please log in" },
            { status: 401 }
        );
    }
    const body = await req.json(); 

    const validation = productSchema.safeParse(body);

    if (!validation.success) {
      const errorMessages = validation.error.issues.map((issue) => ({
        field: issue.path.join("."),
        message: issue.message,
      }));
        
        return NextResponse.json(
            {
                error: "Validation failed",
                details: errorMessages,
            },
            { status: 400 }
        );
    }
    const product = await prisma.product.create({
        data : validation.data,
    });

    return NextResponse.json(
      {
        message: "Product created successfully!",
        product: product,
        success : true,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
