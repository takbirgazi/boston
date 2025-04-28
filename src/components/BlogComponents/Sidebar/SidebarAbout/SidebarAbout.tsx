import SidebarHeader from "../SidebarHeader/SidebarHeader";

const SidebarAbout = () => {
    return (
        <div className="py-1">
            <SidebarHeader heading="About Us" />
            <div className="py-5">
                <p className="text-gray-500 font-lato">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni</p>
            </div>
        </div>
    );
};

export default SidebarAbout;