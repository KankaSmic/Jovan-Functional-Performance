import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "In-Person Coaching",
    description: "One-to-one coaching sessions with movement assessment, form correction, and tailored training plans designed specifically for your goals.",
    image: "https://media.base44.com/images/public/69ea6f23859789d9f4e346b2/ac1ac674b_generated_837b17a2.png",
    features: ["Movement Assessment", "Form Correction", "Tailored Programs", "Real-Time Feedback"],
  },
  {
    title: "Online Coaching",
    description: "Customized training plans, video feedback, weekly check-ins, and ongoing support — coaching excellence delivered anywhere in the world.",
    image: "https://media.base44.com/images/public/69ea6f23859789d9f4e346b2/6b97bee9c_generated_1f0105bb.png",
    features: ["Custom Training Plans", "Video Feedback", "Weekly Check-ins", "Messaging Support"],
  },
  {
    title: "Hybrid Coaching",
    description: "The best of both worlds. Combination of in-person sessions and online support for maximum flexibility and results.",
    image: "https://media.base44.com/images/public/69ea6f23859789d9f4e346b2/d39e784ff_generated_c041a980.png",
    features: ["In-Person + Online", "Maximum Flexibility", "Nutrition Guidance", "Progress Reviews"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <span className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-primary mb-4 block">
            What I Offer
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wide mb-4">
            Coaching Services
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Premium coaching solutions built around your goals, schedule, and lifestyle.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="group relative bg-card border border-border/40 rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading text-2xl text-foreground tracking-wide mb-3">
                  {service.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5">
                  {service.description}
                </p>
                <div className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="font-body text-xs text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                <a href="#consultation">
                  <Button
                    variant="outline"
                    className="w-full font-body text-sm group/btn border-border/50 hover:border-primary hover:text-primary"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}