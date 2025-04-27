
const ServiceCounter = () => {
    const counter = [
        {
            id: 1,
            title: "Completed Orders",
            value: 15425,
        },
        {
            id: 2,
            title: "Happy Customers",
            value: 8745,
        },
        {
            id: 3,
            title: "Vehicles Fleet",
            value: 235,
        },
        {
            id: 4,
            title: "Years Experience",
            value: 15,
        }
    ]
    return (
        <div style={{ background: "url('https://www.madebydesignesia.com/themes/rentaly/images/background/2.jpg')", backgroundPosition: "center", backgroundAttachment: "fixed", backgroundSize: "cover" }} className='px-8 py-20'>
            <div className="max-w-[1250px] mx-auto px-4 h-full">
                <div className="flex justify-between items-center md:gap-20 gap-6">
                    <h2 className="w-full md:w-1/2 text-white text-4xl tracking-wide font-semibold font-poppins">We offer customers a wide range of <span className="text-[#1ecb15]">commercial cars</span> and <span className="text-[#1ecb15]">luxury cars</span> for any occasion.</h2>
                    <p className="w-full md:w-1/2 text-gray-300 leading-7 text-lg font-light">At our car rental agency, we believe that everyone deserves to experience the pleasure of driving a reliable and comfortable vehicle, regardless of their budget. We have curated a diverse fleet of well-maintained cars, ranging from sleek sedans to spacious SUVs, all at competitive prices. With our streamlined rental process, you can quickly and conveniently reserve your desired vehicle. Whether you need transportation for a business trip, family vacation, or simply want to enjoy a weekend getaway, we have flexible rental options to accommodate your schedule.</p>
                </div>
                <div className="pt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {
                        counter.map(service => <div key={service.id} className="bg-[#121212] rounded-md px-8 py-6">
                            <h2 className="text-[#1ecb15] text-5xl font-bold font-lato text-center pb-2.5">{service.value}</h2>
                            <p className="text-gray-300 leading-7 font-medium text-lg text-center">{service.title}</p>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ServiceCounter;