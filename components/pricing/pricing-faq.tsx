import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Can I buy a single product instead of a bundle?",
    a: "Yes. Every TechVision product — LMS, Education ERP, ERP, and HR Management — can be purchased individually. You can add more products or upgrade to a suite at any time.",
  },
  {
    q: "Do you offer discounts for education institutions?",
    a: "Absolutely. Our Education Suite is purpose-built and priced for schools and universities, and we offer additional discounts for non-profits and government institutions.",
  },
  {
    q: "Is there a free trial?",
    a: "Yes, every plan includes a 14-day free trial with no credit card required. You can request a guided demo from our team at any time.",
  },
  {
    q: "What kind of support do I get?",
    a: "All plans include local Ethiopian support. Growth and above include priority support, and Enterprise includes 24/7 dedicated support with a named account manager.",
  },
  {
    q: "Can TechVision be hosted on-premise?",
    a: "Cloud hosting is the default, but the Enterprise Suite offers an on-premise deployment option for organizations with specific compliance requirements.",
  },
];

export function PricingFaq() {
  return (
    <section className="relative py-24 lg:py-32 border-t border-border">
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <div className="text-center">
          <span className="font-mono text-xs tracking-widest text-primary uppercase">FAQ</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl tracking-tight text-balance">
            Frequently asked questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="mt-12">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-base font-medium">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
