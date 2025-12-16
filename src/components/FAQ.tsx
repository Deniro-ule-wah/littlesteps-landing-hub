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
      question: "How does TrackMyKid help Ugandan parents?",
      answer: "TrackMyKid is designed specifically for Uganda's school transport needs. We understand the unique challenges of Kampala traffic and provide real-time visibility so you always know where your child is."
    },
    {
      question: "How secure is my data?",
      answer: "All child and parent data are encrypted and protected under Uganda's Data Protection and Privacy Act. We use bank-grade security protocols to ensure your family's information stays private."
    },
    {
      question: "How do I renew my subscription?",
      answer: "Simply click the Renew button on your parent dashboard. Renewal costs UGX 700,000 annually per device."
    },
    {
      question: "Can multiple parents track one child?",
      answer: "Yes, both guardians can have linked accounts for shared visibility. Each parent gets their own login credentials with full access to tracking and notifications."
    },
    {
      question: "What is onboarding and offboarding tracking?",
      answer: "Onboarding tracks when your child gets on the bus, and offboarding tracks when they get off. You receive instant notifications for both events, giving you complete peace of mind."
    },
    {
      question: "Do schools need to install special equipment?",
      answer: "Yes, we install a GPS tracking device in each school bus. The installation fee is UGX 1,600,000 per vehicle, which includes the device, setup, and driver training."
    },
    {
      question: "Who do I contact for help?",
      answer: "Reach our Kampala support at support@trackmykid.co.ug or visit our offices at Nakasero, Kampala. Our team is available Monday-Friday, 8AM-6PM EAT."
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
