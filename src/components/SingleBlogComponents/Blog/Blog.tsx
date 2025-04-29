import Image from "next/image";
import Comments from "../Comments/Comments";
import MakeComment from "../MakeComment/MakeComment";

const Blog = () => {
    return (
        <div className="mt-10 py-7">
            <figure>
                <Image src="https://www.madebydesignesia.com/themes/rentaly/images/news/big.jpg" alt="Blog Image" width={800} height={600} />
            </figure>
            <div className="py-8">
                <p className="text-gray-600 font-medium font-poppins pb-6">Quis sunt quis do laboris eiusmod in sint dolore sit pariatur consequat commodo aliqua nulla ad dolor aliquip incididunt voluptate est aliquip adipisicing ea cupidatat nostrud incididunt aliquip dolore. Sed minim nisi duis laborum est labore nisi amet elit adipisicing proident do consectetur dolor labore sit nisi ad proident esse ad velit nisi irure reprehenderit ut et dolor labore veniam quis.</p>
                <p className="text-gray-600 font-medium font-poppins pb-6">Sunt duis laboris ex et quis laborum laborum cillum mollit voluptate culpa consequat ex cupidatat dolor eiusmod proident proident cillum pariatur sint adipisicing in nostrud do dolore consectetur quis incididunt minim consectetur. Exercitation elit proident dolor est id eiusmod dolor dolor incididunt ad voluptate laboris cupidatat est est sint veniam sint officia sint incididunt est sit ut tempor commodo pariatur ut proident et do.</p>
                <p className="text-gray-600 font-medium font-poppins pb-6">Sed eu in ut sint dolor irure fugiat minim veniam sed ea proident ullamco occaecat irure ut velit eu ullamco fugiat cupidatat dolore fugiat. Lorem ipsum id non deserunt id consequat duis voluptate amet aliqua pariatur laboris officia pariatur veniam velit reprehenderit sint nostrud cupidatat magna eiusmod mollit exercitation pariatur nulla minim laboris dolore aliqua consectetur cillum duis aute consectetur.</p>
            </div>
            <Comments />
            <MakeComment />
        </div>
    );
};

export default Blog;