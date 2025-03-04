"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";
import Image from "next/image";

interface ProductFormData {
  name: string;
  description: string;
  price: number;
  discount: number;
  packs: string[];
  about: string[];
  features: string[];
  images: string[];
}

export default function ProductForm() {
  const [formData, setFormData] = useState<ProductFormData>({
    name: "",
    description: "",
    price: 0,
    discount: 0,
    packs: [],
    about: [],
    features: [],
    images: [],
  });

  const [aboutInput, setAboutInput] = useState("");
  const [featuresInput, setFeaturesInput] = useState("");
  const [packsInput, setPacksInput] = useState("");
  const [imagesInput, setImagesInput] = useState("");

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleArrayChange = (name: keyof ProductFormData, value: string) => {
    if(name=="images"){
      if(!value.startsWith("http")){
        toast.error("Please enter valid url");
        return;
      }
    }
    if (value.trim()) {
      setFormData({
        ...formData,
        //@ts-ignore
        [name]: [...formData[name], value.trim()],
      });
    }
  };

  const handleDelete = (name: keyof ProductFormData, index: number) => {
    setFormData({
      ...formData,
      //@ts-ignore
      [name]: formData[name].filter((_, i) => i !== index),
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await axios.post("/api/v1/product", formData);
      console.log(res);

      if (res?.data?.success) {
        toast.success(res?.data?.message);
        router.push("/admin");
      }
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        toast.error(error?.response?.data?.details?.[0]?.message || "Something went wrong");
      } else {
        toast.error("Internal server error");
      }
    }
  };

  return (
    <div className="p-10">
      <div className="space-y-4 max-w-2xl mx-auto p-6 border rounded-lg shadow-lg">
        <div>
          <Label htmlFor="name">Product Name</Label>
          <Input id="name" type="text" name="name" placeholder="Product Name" value={formData.name} onChange={handleChange} />
        </div>
        <div>
          <Label htmlFor="description">Description</Label>
          <Input id="description" type="text" name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
        </div>
        <div>
          <Label htmlFor="price">Price</Label>
          <Input id="price" type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} />
        </div>
        <div>
          <Label htmlFor="discount">Discount (%)</Label>
          <Input id="discount" type="number" name="discount" placeholder="Discount (%)" value={formData.discount} onChange={handleChange} />
        </div>

        {/* About List */}
        <div>
          <Label>About</Label>
          <ul className="list-disc pl-5 mb-2">
            {formData.about.map((item, index) => (
              <li key={index} className="flex justify-between items-center">
                {item}
                <X className="cursor-pointer text-red-500" onClick={() => handleDelete("about", index)} />
              </li>
            ))}
          </ul>
          <div className="flex gap-5">
            <Input
              type="text"
              placeholder="Add an about detail"
              value={aboutInput}
              onChange={(e) => setAboutInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key == "Enter") {
                  handleArrayChange("about", aboutInput);
                  setAboutInput("");
                }
              }}
            />
            <Button
              type="button"
              className="bg-[#A73F3C] hover:bg-[#A73F3C]"
              onClick={() => {
                handleArrayChange("about", aboutInput);
                setAboutInput("");
              }}
            >
              Add About
            </Button>
          </div>
        </div>

        {/* Features List */}
        <div>
          <Label>Features</Label>
          <ul className="list-disc pl-5 mb-2">
            {formData.features.map((item, index) => (
              <li key={index} className="flex justify-between items-center">
                {item}
                <X className="cursor-pointer text-red-500" onClick={() => handleDelete("features", index)} />
              </li>
            ))}
          </ul>
          <div className="flex gap-5">
            <Input
              type="text"
              placeholder="Add a feature"
              className="w-[80%]"
              value={featuresInput}
              onChange={(e) => setFeaturesInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key == "Enter") {
                  handleArrayChange("features", featuresInput);
                  setFeaturesInput("");
                }
              }}
            />
            <Button
              type="button"
              className="bg-[#A73F3C] hover:bg-[#A73F3C] "
              onClick={() => {
                handleArrayChange("features", featuresInput);
                setFeaturesInput("");
              }}
            >
              Add Feature
            </Button>
          </div>
        </div>

        {/* Packs List */}
        <div>
          <Label>Packs</Label>
          <ul className="list-disc pl-5 mb-2">
            {formData.packs.map((item, index) => (
              <li key={index} className="flex justify-between items-center">
                {item}
                <X className="cursor-pointer text-red-500" onClick={() => handleDelete("packs", index)} />
              </li>
            ))}
          </ul>
          <div className="flex gap-5">
            <Input
              type="text"
              placeholder="Add a pack"
              value={packsInput}
              onChange={(e) => setPacksInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key == "Enter") {
                  handleArrayChange("packs", packsInput);
                  setPacksInput("");
                }
              }}
            />
            <Button
              type="button"
              className="bg-[#A73F3C] hover:bg-[#A73F3C] "
              onClick={() => {
                handleArrayChange("packs", packsInput);
                setPacksInput("");
              }}
            >
              Add Pack
            </Button>
          </div>
        </div>

        {/* Images List */}
        <div>
          <Label>Images</Label>
          <div className="grid grid-cols-3 gap-4 mb-2">
            {formData.images.map((item, index) => (
              <div key={index} className="relative">
                <Image
                  src={item}
                  alt={`Product image ${index + 1}`}
                  width={200}
                  height={200}
                  className="object-cover rounded-lg"
                />
                <X
                  className="absolute top-2 right-2 cursor-pointer text-red-500 bg-white rounded-full"
                  onClick={() => handleDelete("images", index)}
                />
              </div>
            ))}
          </div>
          <div className="flex gap-5">
            <Input
              type="text"
              placeholder="Add an image URL"
              value={imagesInput}
              onChange={(e) => setImagesInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key == "Enter") {
                  handleArrayChange("images", imagesInput);
                  setImagesInput("");
                }
              }}
            />
            <Button
              type="button"
              className="bg-[#A73F3C] hover:bg-[#A73F3C]"
              onClick={() => {
                handleArrayChange("images", imagesInput);
                setImagesInput("");
              }}
            >
              Add Image
            </Button>
          </div>
        </div>

        <Button onClick={handleSubmit} className="w-full bg-[#A73F3C] hover:bg-[#A73F3C]">
          Submit
        </Button>
      </div>
    </div>
  );
}
