import Blogs from "@/components/BlogComponents/Blogs/Blogs";
import SidebarRecentPost from "@/components/BlogComponents/Sidebar/SidebarRecentPost/SidebarRecentPost";
import SidebarTags from "@/components/BlogComponents/Sidebar/SidebarTags/SidebarTags";
import PageHeader from "@/components/SharedComponent/PageHeader/PageHeader";

const page = () => {
    const pageHeading = {
        heading: "News & Updates"
    }
    return (
        <div className="bg-[#ffffff]">
            <PageHeader pageHeaderData={pageHeading} />
            <div className="max-w-[1250px] mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="w-full md:w-2/3">
                        <Blogs />
                    </div>
                    <div className="w-full md:w-1/3">
                        <div className="mt-10 py-7 flex flex-col gap-8">
                            <SidebarRecentPost />
                            <SidebarTags />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;