import HeroForm from "../HeroForm/HeroForm";

const Hero = () => {
    const timeline = [
        {
            id: 1,
            title: "Choose a vehicle",
            description: "Unlock unparalleled adventures and memorable journeys with our vast fleet of vehicles tailored to suit every need, taste, and destination.",
        },
        {
            id: 2,
            title: "Pick location & date",
            description: "Pick your ideal location and date, and let us take you on a journey filled with convenience, flexibility, and unforgettable experiences.",
        },
        {
            id: 3,
            title: "Make a booking",
            description: "Secure your reservation with ease, unlocking a world of possibilities and embarking on your next adventure with confidence.",
        },
        {
            id: 4,
            title: "Sit back & relax",
            description: "Hassle-free convenience as we take care of every detail, allowing you to unwind and embrace a journey filled comfort.",
        },
    ]
    return (
        <div style={{ background: `url("https://www.madebydesignesia.com/themes/rentaly/images/background/1.jpg")` }} className="bg-center bg-no-repeat bg-cover min-h-[950px]">
            <div className="container mx-auto max-w-[1200px] px-4 flex flex-col h-full">
                <div className="pt-28 md:pt-40">
                    <h2 className="text-white font-bold text-3xl md:text-5xl">Looking for a <span className="text-mainColor">vehicle</span>? You&apos;re at the right place.</h2>
                </div>
                <div className="py-10">
                    <HeroForm />
                </div>
                <div className="flex flex-col md:flex-row py-5">
                    {
                        timeline.map(item => <div key={item.id} className={`relative ${(timeline.length == item.id) ? "" : "border-l md:border-l-0 md:border-t border-green-500"} flex flex-col gap-3 pl-8 md:ml-0 ml-5 md:pl-0 md:py-5 md:w-1/2`}>
                            <h2 className="text-white font-bold text-base md:text-xl -mt-4 md:mt-0 pr-8 md:pt-5">{item.title}</h2>
                            <p className="text-white text-sm md:text-base pr-8 pb-10 ">{item.description}</p>
                            <div className="absolute bg-green-500 rounded-sm -top-[50px] left-0 md:left-6 -translate-x-1/2 translate-y-1/2">
                                <p className="px-5 py-3 font-bold text-white">{item.id}</p>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Hero;