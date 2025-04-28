import { FaDelicious, FaEnvelope, FaFacebook, FaLinkedin, FaPinterest, FaReddit, FaStumbleupon, FaTwitter } from "react-icons/fa";
import SidebarHeader from "../SidebarHeader/SidebarHeader";


const SidebarSocialShare = () => {
    const socials = [
        {
            id: 1,
            link: "/",
            icon: <FaTwitter />,
            bgColor: "#3ea1ec"
        },
        {
            id: 2,
            link: "/",
            icon: <FaFacebook />,
            bgColor: "#344e86"
        },
        {
            id: 3,
            link: "/",
            icon: <FaReddit />,
            bgColor: "#c23321"
        },
        {
            id: 4,
            link: "/",
            icon: <FaLinkedin />,
            bgColor: "#0976b4"
        },
        {
            id: 5,
            link: "/",
            icon: <FaPinterest />,
            bgColor: "#cc2127"
        },
        {
            id: 6,
            link: "/",
            icon: <FaStumbleupon />,
            bgColor: "#eb4924"
        },
        {
            id: 7,
            link: "/",
            icon: <FaDelicious />,
            bgColor: "#198cff"
        },
        {
            id: 8,
            link: "/",
            icon: <FaEnvelope />,
            bgColor: "#179510"
        },
    ]
    return (
        <div className="py-1">
            <SidebarHeader heading="Share With Friends" />
            <div className="flex flex-col gap-4 flex-wrap pt-4">
                <div className="flex items-center gap-2 flex-wrap">
                    {
                        socials.map(social => <p key={social.id} style={{ backgroundColor: social.bgColor }} className={`hover:scale-110 transition-all duration-500 cursor-pointer p-2 text-center text-lg rounded-[3px] text-white flex`}>{social.icon}</p>)
                    }
                </div>
            </div>
        </div>
    );
};

export default SidebarSocialShare;