import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How does online coaching work?",
    a: "You'll receive a fully customized training and nutrition plan through our coaching app. Each week, we'll check in via video call or messaging to review progress, adjust your program, and keep you accountable. You'll have direct access to me for questions and form checks throughout the week.",
  },
  {
    q: "Do I need gym experience?",
    a: "Not at all. My programs are designed for all fitness levels. Whether you're a complete beginner or an experienced lifter, I'll meet you where you are and build a plan that matches your current ability while progressively challenging you.",
  },
  {
    q: "How often do we check in?",
    a: "Depending on your plan, we check in weekly or bi-weekly via video calls. You also have daily messaging access for quick questions, form checks, and accountability support.",
  },
  {
    q: "Can I train from home?",
    a: "Absolutely. I can design home-based, gym-based, or hybrid programs depending on your equipment and preferences. Functional training is incredibly adaptable to any environment.",
  },
  {
    q: "Is nutrition included?",
    a: "Yes. Every coaching plan includes personalized nutrition guidance. This isn't a restrictive diet — it's a sustainable approach to eating that supports your training goals and fits your lifestyle.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <span className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-primary mb-4 block">
            Questions
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wide mb-4">
            Frequently Asked
          </h2>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <AccordionItem
                value={`item-${i}`}
                className="bg-card border border-border/40 rounded-xl px-6 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="font-body font-semibold text-foreground hover:text-primary hover:no-underline py-5 text-left">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="font-body text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
}