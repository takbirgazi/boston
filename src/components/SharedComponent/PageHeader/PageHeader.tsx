import { PageHeaderType } from "./PageHeaderType";

const PageHeader: React.FC<PageHeaderType> = ({ pageHeaderData }) => {
    return (
        <div style={{ background: `url("https://www.madebydesignesia.com/themes/rentaly/images/background/1.jpg")` }} className="bg-center bg-no-repeat bg-cover h-80">
            <div className="container mx-auto max-w-[1200px] px-4 flex justify-center items-center h-full">
                <div>
                    <h2 className="text-5xl font-bold text-white">{pageHeaderData.heading}</h2>
                </div>
            </div>
        </div>
    );
};

export default PageHeader;