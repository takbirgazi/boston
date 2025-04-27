import SectionHeader from "@/components/SharedComponent/SectionHeader/SectionHeader";
import BlogCard from "./BlogCard/BlogCard";

const Blogs = () => {
    const SectionHeaderData = {
        title: "Latest From Us",
        heading: "News & Promo",
        description: "Breaking news, fresh perspectives, and in-depth coverage - stay ahead with our latest news, insights, and analysis.",
    };

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
        <div className="md:py-12">
            <div className="w-full md:max-w-xl mx-auto">
                <SectionHeader headerInfo={SectionHeaderData} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
                {
                    blogs.map(blog => <BlogCard key={blog.id} blogCardData={blog} />)
                }
            </div>
        </div>
    );
};

export default Blogs;