import Image from "next/image";
import { FaQuoteRight } from "react-icons/fa";


const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "Stepanie Hutchkiss",
            image: "https://www.madebydesignesia.com/themes/rentaly/images/testimonial/1.jpg",
            title: 'Excellent Service! Car Rent Service!',
            message: 'I have been using Rentaly for my Car Rental needs for over 5 years now. I have never had any problems with their service. Their customer support is always responsive and helpful. I would recommend Rentaly to anyone looking for a reliable Car Rental provider.',
        },
        {
            id: 2,
            name: "Jovan Reels",
            image: "https://www.madebydesignesia.com/themes/rentaly/images/testimonial/2.jpg",
            title: 'Excellent Service! Car Rent Service!',
            message: 'We have been using Rentaly for our trips needs for several years now and have always been happy with their service. Their customer support is Excellent Service! and they are always available to help with any issues we have. Their prices are also very competitive',
        },
        {
            id: 3,
            name: "Kanesha Keyton",
            image: "https://www.madebydesignesia.com/themes/rentaly/images/testimonial/3.jpg",
            title: 'Excellent Service! Car Rent Service!',
            message: 'Endorsed by industry experts, Rentaly is the Car Rental solution you can trust. With years of experience in the field, we provide fast, reliable and secure Car Rental services.',
        },
    ]
    return (
        <div className="max-w-[1880px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-2 py-10">
                {
                    testimonials.map(testimonial => (
                        <div className="relative group" key={testimonial.id}>
                            <figure className="rounded-xl overflow-hidden">
                                <Image
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    height={650}
                                    width={200}
                                />
                            </figure>
                            <div className="absolute top-0 left-0 w-full h-full rounded-xl bg-[#00000069] p-6 md:p-10 ">
                                <div className="flex justify-end text-[#1ecb15] text-4xl">
                                    <FaQuoteRight />
                                </div>
                                <h4 className="text-white bg-opacity-50 text-xl font-medium">{testimonial.title}</h4>
                                <p className="text-gray-200 py-6">{testimonial.message}</p>
                                <p className="flex items-center gap-3 text-white"><span className="border-b border-white w-5 h-1"></span> <span className="text-sm font-medium">{testimonial.name}</span></p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Testimonials;