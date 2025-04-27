import Image from "next/image";

const HeroForm = () => {
    const vehicles = [
        {
            id: 1,
            name: "Car",
            image: "https://www.madebydesignesia.com/themes/rentaly/images/select-form/car.png",
        },
        {
            id: 2,
            name: "Van",
            image: "https://www.madebydesignesia.com/themes/rentaly/images/select-form/van.png",
        },
        {
            id: 3,
            name: "Minibus",
            image: "https://www.madebydesignesia.com/themes/rentaly/images/select-form/minibus.png",
        },
        {
            id: 4,
            name: "Prestige",
            image: "https://www.madebydesignesia.com/themes/rentaly/images/select-form/sportscar.png",
        }
    ]
    return (
        <div className="bg-white rounded flex flex-col md:flex-row justify-between gap-5 p-7">
            <div className="w-full flex flex-col md:w-1/2">
                <p className="font-bold">What is your vehicle type?</p>
                <div className="gap-3 w-full grid grid-cols-2 lg:grid-cols-4 pt-3">
                    {
                        vehicles.map(vehicle => <div key={vehicle.id} className="rounded bg-mainColor px-5 py-3 flex flex-col items-center justify-between cursor-pointer">
                            <figure>
                                <Image className="h-10 w-20" src={vehicle.image} height={680} width={400} alt={vehicle.name} />
                            </figure>
                            <p className="text-white text-lg text-center font-bold">{vehicle.name}</p>
                        </div>)
                    }
                </div>
            </div>
            <div className="flex flex-col gap-3 w-full md:w-1/2 ">
                <div className="flex flex-col md:flex-row gap-3">
                    <div className="flex flex-col gap-3 w-full md:w-1/2">
                        <label className="font-bold" htmlFor="pickUp">Pick Up Location</label>
                        <input className="outline-0 rounded border py-1 w-full border-[#818da6] focus:border-[#1266f1] focus-visible:border-[#1266f1] px-2.5 transition-all duration-500" type="text" placeholder="Enter your pick Up location" />
                    </div>
                    <div className="flex flex-col gap-3 w-full md:w-1/2">
                        <label className="font-bold" htmlFor="pickUp">Drop Off Location</label>
                        <input className="outline-0 rounded border py-1 w-full border-[#818da6] focus:border-[#1266f1] focus-visible:border-[#1266f1] px-2.5 transition-all duration-500" type="text" placeholder="Enter your drop off location" />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-3">
                    <div className="flex flex-col gap-3 w-full md:w-1/2">
                        <label className="font-bold" htmlFor="pickUp">Pick Up Date & Time</label>
                        <input className="outline-0 rounded border py-1 w-full border-[#818da6] focus:border-[#1266f1] focus-visible:border-[#1266f1] px-2.5 transition-all duration-500" defaultValue={new Date().toISOString().split('T')[0]} type="date" />
                    </div>
                    <div className="flex flex-col gap-3 w-full md:w-1/2">
                        <label className="font-bold" htmlFor="pickUp">Return Date & Time</label>
                        <input className="outline-0 rounded border py-1 w-full border-[#818da6] focus:border-[#1266f1] focus-visible:border-[#1266f1] px-2.5 transition-all duration-500" defaultValue={new Date().toISOString().split('T')[0]} type="date" />
                    </div>
                </div>
                <div className="flex gap-4 justify-end">
                    <input className="text-sm rounded bg-mainColor cursor-pointer text-white px-6 py-2 font-extrabold" type="submit" value="Find a Vehicle" />
                </div>
            </div>
        </div>
    );
};

export default HeroForm;