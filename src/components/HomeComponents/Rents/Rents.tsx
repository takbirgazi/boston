import SectionHeader from "@/components/SharedComponent/SectionHeader/SectionHeader";
import RentsCard from "./RentsCard/RentsCard";


const Rents = () => {
    const SectionHeaderData = {
        title: "Enjoy Your Ride",
        heading: "Our Vehicle Fleet",
        description: "Driving your dreams to reality with an exquisite fleet of versatile vehicles for unforgettable journeys.",
    };
    const rentCars = [
        {
            id: 1,
            name: "BMW M2 2020",
            image: "https://www.madebydesignesia.com/themes/rentaly/images/car-single/1.jpg",
            rating: 36,
            dailyRate: 265,
            specifications: {
                seat: 2,
                luggage: 5,
                door: 2,
                body: "Sedan",
            }
        },
        {
            id: 2,
            name: "BMW M2",
            image: "https://www.madebydesignesia.com/themes/rentaly/images/cars/ferrari-enzo.jpg",
            rating: 75,
            dailyRate: 250,
            specifications: {
                seat: 2,
                luggage: 4,
                door: 2,
                body: "Sedan",
            }
        },
        {
            id: 3,
            name: "Ferarri Enzo",
            image: "https://www.madebydesignesia.com/themes/rentaly/images/cars/jeep-renegade.jpg",
            rating: 56,
            dailyRate: 200,
            specifications: {
                seat: 2,
                luggage: 5,
                door: 4,
                body: "Exotic Car",
            }
        },
    ]

    return (
        <div className="py-12">
            <div className="w-full md:max-w-xl mx-auto">
                <SectionHeader headerInfo={SectionHeaderData} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
                {
                    rentCars.map((car) => (
                        <RentsCard key={car.id} rentCardData={car} />
                    ))
                }
            </div>
        </div>
    );
};

export default Rents;