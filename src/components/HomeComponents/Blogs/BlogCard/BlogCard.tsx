import Image from "next/image";
import { BlogCardType } from "./BlogCardType";


const BlogCard: React.FC<BlogCardType> = ({ blogCardData }) => {
    return (
        <div className="p-3">
            <div className="relative min-h-[450px]">
                <figure className="rounded-md overflow-hidden h-52">
                    <Image className="h-full" src={blogCardData.image} alt="Car" width={600} height={350} />
                </figure>
                <div className="absolute bg-white border-b-2 border-[#1ecb15] rounded-tr-md rounded-tl-md p-5 pb-10 -mt-10 mx-5">
                    <h2 className="text-lg font-semibold text-gray-800">{blogCardData.title.slice(0, 30)}{blogCardData.title.length > 30 && "..."}</h2>
                    <p className="py-5 text-gray-500">{blogCardData.description.slice(0, 150)}{blogCardData.description.length > 150 && "..."}</p>
                    <div>
                        <button className="px-4 py-1.5 rounded-sm bg-[#1ecb15] text-white font-semibold cursor-pointer">Read More</button>
                    </div>
                </div>
                <div className="absolute top-5 left-5 bg-[#1ecb15] text-white py-1 px-2.5 rounded-sm">
                    <h2 className="text-4xl font-semibold text-center">10</h2>
                    <p className="uppercase text-center text-xs tracking-widest">Mar</p>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;