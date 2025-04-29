"use client"
import SidebarAbout from "@/components/BlogComponents/Sidebar/SidebarAbout/SidebarAbout";
import SidebarRecentPost from "@/components/BlogComponents/Sidebar/SidebarRecentPost/SidebarRecentPost";
import SidebarSocialShare from "@/components/BlogComponents/Sidebar/SidebarSocialShare/SidebarSocialShare";
import SidebarTags from "@/components/BlogComponents/Sidebar/SidebarTags/SidebarTags";
import PageHeader from "@/components/SharedComponent/PageHeader/PageHeader";
import Blog from "@/components/SingleBlogComponents/Blog/Blog";
import { useParams } from "next/navigation";

const SingleBlog = () => {
    const router = useParams();
    const rawHeading = Array.isArray(router.singleBlog) ? router.singleBlog.join(", ") : router.singleBlog || "Default Heading";
    const heading = decodeURIComponent(rawHeading.replace(/%20/g, " "));

    const pageHeading = {
        heading: heading
    }

    return (
        <div className="bg-[#ffffff]">
            <PageHeader pageHeaderData={pageHeading} />
            <div className="max-w-[1250px] mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-16">
                    <div className="w-full pb-8 md:w-2/3">
                        <Blog />
                    </div>
                    <div className="w-full md:w-1/3">
                        <div className="mt-10 py-7 flex flex-col gap-8">
                            <SidebarSocialShare />
                            <SidebarRecentPost />
                            <SidebarAbout />
                            <SidebarTags />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleBlog;