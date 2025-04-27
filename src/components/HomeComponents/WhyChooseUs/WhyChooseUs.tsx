import SectionHeader from "@/components/SharedComponent/SectionHeader/SectionHeader";
import Image from "next/image";
import { FaMapPin, FaRoad, FaTag, FaTrophy } from "react-icons/fa";


const WhyChooseUs = () => {
    const SectionHeaderData = {
        title: "Why Choose Us",
        heading: "Our Features",
        description: "Discover a world of convenience, safety, and customization, paving the way for unforgettable adventures and seamless mobility solutions.",
    };
    return (
        <div className="py-12">
            <div className="w-full md:max-w-xl mx-auto">
                <SectionHeader headerInfo={SectionHeaderData} />
            </div>
            <div className="flex flex-col md:flex-row gap-5 justify-center items-center">
                <div className="w-full md:w-1/4 flex flex-col gap-5">
                    <div data-aos="fade-left" className="flex gap-5 items-start">
                        <div className="bg-[#1ecb15] rounded-sm text-white p-2.5 text-3xl">
                            <FaTrophy />
                        </div>
                        <div>
                            <h2 className="font-semibold text-gray-800 text-lg">First class services</h2>
                            <p className="text-gray-600 pr-5">Where luxury meets exceptional care, creating unforgettable moments and exceeding your every expectation.</p>
                        </div>
                    </div>
                    <div data-aos="fade-left" className="flex gap-5 items-start">
                        <div className="bg-[#1ecb15] rounded-sm text-white p-2.5 text-3xl">
                            <FaRoad />
                        </div>
                        <div>
                            <h2 className="font-semibold text-gray-800 text-lg">24/7 road assistance</h2>
                            <p className="text-gray-600 pr-5">Reliable support when you need it most, keeping you on the move with confidence and peace of mind.</p>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up" className="w-full md:w-2/4">
                    <figure>
                        <Image src="https://www.madebydesignesia.com/themes/rentaly/images/misc/car.png" alt="Cur" width={650} height={300} />
                    </figure>
                </div>
                <div className="w-full md:w-1/4 flex flex-col gap-5">
                    <div data-aos="fade-right" className="flex flex-row-reverse gap-5 items-start justify-end">
                        <div className="bg-[#1ecb15] rounded-sm text-white p-2.5 text-3xl">
                            <FaTag />
                        </div>
                        <div>
                            <h2 className="font-semibold text-gray-800 text-lg text-right">Quality at Minimum Expense</h2>
                            <p className="text-gray-600 pl-5 text-right">Unlocking affordable brilliance with elevating quality while minimizing costs for maximum value.</p>
                        </div>
                    </div>
                    <div data-aos="fade-right" className="flex flex-row-reverse gap-5 items-start justify-end">
                        <div className="bg-[#1ecb15] rounded-sm text-white p-2.5 text-3xl">
                            <FaMapPin />
                        </div>
                        <div>
                            <h2 className="font-semibold text-gray-800 text-lg text-right">Free Pick-Up & Drop-Off</h2>
                            <p className="text-gray-600 pl-5 text-right">Enjoy free pickup and drop-off services, adding an extra layer of ease to your car rental experience.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;