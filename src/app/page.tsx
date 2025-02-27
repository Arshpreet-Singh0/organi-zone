// import { getServerSession } from "next-auth";
import HeroSection from "@/components/home/HeroSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import BestSellersAndTestimonials from "@/components/home/BestSellers";
// import { authOptions } from "@/lib/auth";

export default async function Dashboard() {
  // const session = await getServerSession(authOptions);

  return (
    <div>
      <HeroSection />
      <WhyChooseUs />
      <BestSellersAndTestimonials />
    </div>
  );
}
