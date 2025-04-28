"use client"
import BlogCard from "@/components/HomeComponents/Blogs/BlogCard/BlogCard";
import { useState } from "react";

const Blogs = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const pageLength = 5;
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
        <div className="mt-10 py-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {
                    blogs.map(blog => <BlogCard key={blog.id} blogCardData={blog} />)
                }
            </div>
            <div className="flex pb-8">
                <div className="flex border">
                    <button disabled={currentPage < 1 ? true : false} onClick={() => setCurrentPage(currentPage - 1)} className={`${currentPage < 1 ? "cursor-not-allowed" : "cursor-pointer"} border-r py-3 px-6 font-semibold text-gray-600 font-lato`}>Prev</button>
                    {Array.from({ length: pageLength }, (_, i) => (
                        <button onClick={() => setCurrentPage(i)} className={`${currentPage === i ? "bg-[#1ecb15] text-white" : "bg-transparent"} border-r py-3 px-6 font-semibold text-gray-600 font-lato cursor-pointer`} key={i}>{i + 1}</button>
                    ))}
                    <button disabled={currentPage > pageLength - 2 ? true : false} onClick={() => setCurrentPage(currentPage + 1)} className={`${currentPage > pageLength - 2 ? "cursor-not-allowed" : "cursor-pointer"} py-3 px-6 font-semibold text-gray-600 font-lato`}>Next</button>
                </div>
            </div>
        </div >
    );
};

export default Blogs;