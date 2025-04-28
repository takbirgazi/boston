import Blogs from "@/components/BlogComponents/Blogs/Blogs";
import Sidebar from "@/components/BlogComponents/Sidebar/Sidebar";
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
                        <Sidebar />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;