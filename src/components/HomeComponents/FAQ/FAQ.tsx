import SectionHeader from "@/components/SharedComponent/SectionHeader/SectionHeader";
import FAQAccordion from "./FAQAccordion/FAQAccordion";

const FAQ = () => {
    const SectionHeaderData = {
        title: "Do You Have",
        heading: "Any Questions?",
        description: "",
    };
    const accordionsLeft = [
        {
            id: 1,
            title: "How do I get started with Car Rental?",
            description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio."
        },
        {
            id: 2,
            title: "Can I rent a car with a debit card?",
            description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio."
        },
        {
            id: 3,
            title: "What kind of Car Rental do I need?",
            description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio."
        }
    ]
    const accordionsRight = [
        {
            id: 4,
            title: "What is a rental car security deposit?",
            description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio."
        },
        {
            id: 5,
            title: "Can I cancel or modify my reservation?",
            description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio."
        },
        {
            id: 6,
            title: "Is it possible to extend my rental period?",
            description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio."
        }
    ]

    return (
        <div>
            <div className="w-full md:max-w-xl mx-auto">
                <SectionHeader headerInfo={SectionHeaderData} />
            </div>
            <div className="flex flex-col md:flex-row md:gap-8 pb-20">
                <FAQAccordion faqAccordionData={accordionsLeft} />
                <FAQAccordion faqAccordionData={accordionsRight} />
            </div>
        </div>
    );
};

export default FAQ;