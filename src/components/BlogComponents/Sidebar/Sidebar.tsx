import Image from "next/image";
import { FaCalendarAlt } from "react-icons/fa";


const Sidebar = () => {
    const blogs = [
        {
            id: 1,
            title: "Enjoy Best Travel Experience",
            description: "Traveling is an enriching experience that allows us to explore new destinations, immerse ourselves in different cultures, and create lifelong memories.",
            image: "https://www.madebydesignesia.com/themes/rentaly/images/news/pic-blog-1.jpg",
            date: "10 March",
        },
        {
            id: 2,
            title: "The Future of Car Rent",
            description: "As technology continues to advance at a rapid pace, the car rental industry is poised for a transformative shift. The future of car rental promises",
            image: "https://www.madebydesignesia.com/themes/rentaly/images/news/pic-blog-2.jpg",
            date: "10 March",
        },
        {
            id: 3,
            title: "Holiday Tips For Backpacker",
            description: "For adventure seekers and budget-conscious travelers, backpacking offers a thrilling and immersive way to explore the world. Whether you're embarking",
            image: "https://www.madebydesignesia.com/themes/rentaly/images/news/pic-blog-3.jpg",
            date: "10 March",
        }
    ]

    return (
        <div className="mt-10 py-7 flex flex-col gap-8">
            <div className="py-1">
                <div>
                    <h2 className="text-xl font-semibold font-lato text-gray-800">Recent Posts</h2>
                    <p className="flex py-2">
                        <span className="w-10 h-0.5 bg-[#1ecb15]"></span>
                    </p>
                </div>
                <div className="flex flex-col gap-4">
                    {
                        blogs.map(blog => <div key={blog.id} className="flex gap-4 items-center border-b py-2">
                            <figure className="rounded-sm overflow-hidden h-14 w-16">
                                <Image className="h-full w-full object-cover" src={blog.image} alt={blog.title} height={100} width={100} />
                            </figure>
                            <div className="flex flex-col gap-2">
                                <h2 className="font-semibold font-lato text-gray-800">{blog.title}</h2>
                                <p className="flex gap-2 items-center">
                                    <FaCalendarAlt className="text-[#1ecb15] text-xs" />
                                    <span className="text-gray-700 text-xs font-medium font-lato">{blog.date}, 2022</span>
                                </p>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Sidebar;