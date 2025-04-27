import Blogs from "@/components/HomeComponents/Blogs/Blogs";
import FAQ from "@/components/HomeComponents/FAQ/FAQ";
import Hero from "@/components/HomeComponents/Hero/Hero";
import HeroParallax from "@/components/HomeComponents/HeroParallax/HeroParallax";
import Rents from "@/components/HomeComponents/Rents/Rents";
import WhyChooseUs from "@/components/HomeComponents/WhyChooseUs/WhyChooseUs";
import ServiceCounter from "@/components/HomeComponents/ServiceCounter/ServiceCounter";
import Testimonials from "@/components/Testimonials/Testimonials";
import 'aos/dist/aos.css';

export default function Home() {
  return (
    <div className="bg-[#ffffff]">
      <Hero />
      <div className="max-w-[1250px] mx-auto px-4">
        <WhyChooseUs />
      </div>
      <ServiceCounter />
      <div className="max-w-[1250px] mx-auto px-4">
        <Rents />
      </div>
      <HeroParallax />
      <div className="max-w-[1250px] mx-auto px-4">
        <Blogs />
      </div>
      <Testimonials />
      <div className="max-w-[1250px] mx-auto px-4">
        <FAQ />
      </div>
    </div>
  );
}
