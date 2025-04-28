
interface SidebarHeaderType {
    heading: string,

}

const SidebarHeader: React.FC<SidebarHeaderType> = ({ heading }) => {
    return (
        <div>
            <h2 className="text-xl font-semibold font-lato text-gray-800">{heading}</h2>
            <p className="flex py-2">
                <span className="w-10 h-0.5 bg-[#1ecb15]"></span>
            </p>
        </div>
    );
};

export default SidebarHeader;