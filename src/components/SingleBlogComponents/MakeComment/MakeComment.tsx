
const MakeComment = () => {
    return (
        <div className="pt-4">
            <h2 className="text-lg font-bold font-lato text-gray-800">Leave a Comment</h2>
            <div className="pt-4">
                <form className="flex flex-col gap-4">
                    <div>
                        <label className="text-gray-600" htmlFor="name">Name</label>
                        <input className="border-2 transition-all duration-500 focus:border-[#1ecb15] outline-0 focus:bg-[#1ecb152f] rounded-md px-2 py-2 w-full" type="text" />
                    </div>
                    <div>
                        <label className="text-gray-600" htmlFor="name">Email *</label>
                        <input className="border-2 transition-all duration-500 focus:border-[#1ecb15] outline-0 focus:bg-[#1ecb152f] rounded-md px-2 py-2 w-full" type="text" />
                    </div>
                    <div>
                        <label className="text-gray-600" htmlFor="name">Message *</label>
                        <textarea rows={7} className="border-2 transition-all duration-500 focus:border-[#1ecb15] outline-0 focus:bg-[#1ecb152f] rounded-md px-2 py-2 w-full"></textarea>
                    </div>
                    <div>
                        <input className="bg-[#1ecb15] font-semibold text-white px-6 py-1 rounded-sm " type="submit" value="Send" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MakeComment;