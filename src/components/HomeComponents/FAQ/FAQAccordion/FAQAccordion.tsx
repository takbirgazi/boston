import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { FAQAccordionType } from "./FAQAccordionType";

const FAQAccordion: React.FC<FAQAccordionType> = ({ faqAccordionData }) => {
    return (
        <Accordion type="single" collapsible className="w-full">
            {
                faqAccordionData.map(accordion => <AccordionItem key={accordion.id} value={`item-${accordion.id}`}>
                    <AccordionTrigger className="text-base font-poppins border-b">{accordion.title}</AccordionTrigger>
                    <AccordionContent className="font-poppins text-gray-600 text-base pt-4">{accordion.description}</AccordionContent>
                </AccordionItem>)
            }
        </Accordion>
    )
}

export default FAQAccordion;