import Image from "next/image";


const Comments = () => {
    return (
        <div>
            <h2 className="text-lg font-bold font-lato text-gray-800">Comments ({5})</h2>
            <div className="pt-4 border-b">
                <div className="flex gap-6">
                    <figure className="w-[150px]">
                        <Image className="w-full" src="https://www.madebydesignesia.com/themes/rentaly/images/misc/avatar-2.jpg" alt="Comment Profile" width={100} height={100} />
                    </figure>
                    <div className="grow">
                        <div className="pb-3">
                            <h4 className="text-lg text-gray-700 font-semibold">Merrill Rayos</h4>
                            <div className="text-xs flex gap-4 pt-1.5 items-center text-[#1ecb15]">
                                <p>15 January 2020 </p>
                                <span className="w-[1px] h-3 bg-gray-400"></span>
                                <button className="cursor-pointer">Reply</button>
                            </div>
                            <p className="pt-3 text-gray-500">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        </div>
                        {/* Replay */}
                        <div className="flex gap-6 pt-4 border-t">
                            <figure className="w-[150px]">
                                <Image className="w-full" src="https://www.madebydesignesia.com/themes/rentaly/images/misc/avatar-2.jpg" alt="Comment Profile" width={100} height={100} />
                            </figure>
                            <div className="grow">
                                <div className="pb-3">
                                    <h4 className="text-lg text-gray-700 font-semibold">Jackqueline Sprang</h4>
                                    <div className="text-xs flex gap-4 pt-1.5 items-center text-[#1ecb15]">
                                        <p>15 January 2020 </p>
                                        <span className="w-[1px] h-3 bg-gray-400"></span>
                                        <button className="cursor-pointer">Reply</button>
                                    </div>
                                    <p className="pt-3 text-gray-500">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                </div>
                            </div>
                        </div>
                        {/* Replay */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Comments;