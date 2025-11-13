import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How can I track my child?",
      answer: "Login to your parent dashboard and view real-time bus tracking with route updates. You'll see your child's location, estimated arrival times, and receive instant notifications."
    },
    {
      question: "How secure is my data?",
      answer: "All child and parent data are encrypted and protected under Kenya's Data Protection Act. We use bank-grade security protocols to ensure your family's information stays private."
    },
    {
      question: "How do I renew my subscription?",
      answer: "Simply click the Renew button on your parent dashboard. Renewal costs KES 7,000 annually per device."
    },
    {
      question: "Can multiple parents track one child?",
      answer: "Yes, both guardians can have linked accounts for shared visibility. Each parent gets their own login credentials with full access to tracking and notifications."
    },
    {
      question: "Who do I contact for help?",
      answer: "Reach our Nairobi support at support@trackmykid.co.ke or visit our offices at Equity Plaza, Ngara. Our team is available Monday-Friday, 8AM-6PM EAT."
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about TrackMyKid
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border-2 border-border rounded-2xl px-6 data-[state=open]:border-trust-blue transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-trust-blue py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
