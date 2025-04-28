import SidebarHeader from "../SidebarHeader/SidebarHeader";

const SidebarTags = () => {
    const allTags = ["accommodation", "holiday", "hostel", "hotel", "travel", "inn", "lodge", "motel", "resort", "travel", "tourism", "vacation"]

    return (
        <div className="py-1">
            <SidebarHeader heading="Popular Tags" />
            <div className="flex flex-col gap-4 flex-wrap pt-8">
                <div className="flex items-center gap-2 flex-wrap">
                    {
                        allTags.map((tag, ind) => <p key={ind} className="bg-[#1ecb15] px-2 py-1 text-center text-sm rounded-[3px] text-white flex">{tag}</p>)
                    }
                </div>
            </div>
        </div>
    );
};

export default SidebarTags;