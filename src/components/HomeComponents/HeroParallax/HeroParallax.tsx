import React from 'react';
import { FaMapPin, FaRoad, FaTrophy } from 'react-icons/fa';

const HeroParallax = () => {
    const service = [
        {
            id: 1,
            title: "First Class Services",
            icon: <FaTrophy />,
            description: "Where luxury meets exceptional care, creating unforgettable moments and exceeding your every expectation."
        },
        {
            id: 2,
            title: "24/7 road assistance",
            icon: <FaRoad />,
            description: "Reliable support when you need it most, keeping you on the move with confidence and peace of mind."
        },
        {
            id: 3,
            title: "Free Pick-Up & Drop-Off",
            icon: <FaMapPin />,
            description: "Enjoy free pickup and drop-off services, adding an extra layer of ease to your car rental experience."
        }
    ]
    return (
        <div style={{ background: "url('https://www.madebydesignesia.com/themes/rentaly/images/background/3.jpg')", backgroundPosition: "center", backgroundAttachment: "fixed" }} className='px-8 py-20'>
            <div className="max-w-[1250px] mx-auto px-4 flex flex-col md:flex-row gap-8 justify-between items-center h-full">
                <div className='w-full md:w-1/4'>
                    <h1 className='text-white text-5xl font-outfit font-bold'>Let&apos;s Your Adventure Begin</h1>
                </div>
                {
                    service.map(service => <div key={service.id} className='w-full md:w-1/4'>
                        <div className="flex flex-col gap-3 items-start">
                            <div className="bg-[#1ecb15] rounded-sm text-white p-3 text-5xl">
                                {service.icon}
                            </div>
                            <div>
                                <h2 className="font-semibold text-lg text-white py-1.5">{service.title}</h2>
                                <p className="text-gray-200 font-extralight pr-5">{service.description}</p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default HeroParallax;