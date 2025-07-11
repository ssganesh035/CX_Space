import { useQuery } from "@tanstack/react-query";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ } from "@shared/schema";

export default function FAQPage() {
  const { data: faqs, isLoading } = useQuery<FAQ[]>({
    queryKey: ['/api/faqs'],
  });

  if (isLoading) {
    return <div>Loading FAQs...</div>;
  }

  const defaultFAQs = [
    {
      id: 1,
      question: "What is CXSpace and who can join?",
      answer: "CXSpace is a professional community for customer success engineers, technical support professionals, solutions engineers, and anyone in client-facing B2B SaaS roles. We welcome professionals at all career levels who are passionate about customer success and want to grow their skills and network.",
      order: 1,
      isActive: true
    },
    {
      id: 2,
      question: "How do I join the community?",
      answer: "You can join our community through Discord or WhatsApp using the links provided in the \"Join Our Community\" section. Simply click on your preferred platform and follow the instructions to get started.",
      order: 2,
      isActive: true
    },
    {
      id: 3,
      question: "Is there a cost to join CXSpace?",
      answer: "No, CXSpace is completely free to join! We believe in making professional development and networking accessible to everyone in the customer success field.",
      order: 3,
      isActive: true
    },
    {
      id: 4,
      question: "What kind of events does CXSpace organize?",
      answer: "We organize various types of events including workshops, networking meetups, webinars, our annual Supportathon, virtual coffee chats, and career development sessions. Events are held both virtually and in-person in major cities worldwide.",
      order: 4,
      isActive: true
    },
    {
      id: 5,
      question: "How can I participate in Supportathon?",
      answer: "Supportathon registration opens several months before the event. You can participate virtually or in-person, either as an individual or as part of a team. We welcome participants of all skill levels and provide mentorship throughout the event.",
      order: 5,
      isActive: true
    }
  ];

  const faqData = faqs && faqs.length > 0 ? faqs : defaultFAQs;

  return (
    <>
      <title>Frequently Asked Questions - CXSpace</title>
      <meta name="description" content="Get answers to common questions about CXSpace community, membership, events, and career opportunities for customer success professionals." />
      
      <div className="py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-neutral-900 mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-neutral-600">
              Get answers to the most common questions about CXSpace and our community.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8">
            <Accordion type="single" collapsible className="w-full">
              {faqData.map((faq) => (
                <AccordionItem key={faq.id} value={`item-${faq.id}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
}
