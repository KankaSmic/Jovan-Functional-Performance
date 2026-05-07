import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    subtitle: "Online Coaching",
    price: "199",
    period: "/month",
    features: [
      "Custom training plan",
      "Nutrition guidelines",
      "Weekly check-ins",
      "Messaging support",
      "Exercise video library",
      "Monthly program updates",
    ],
    highlighted: false,
  },
  {
    name: "Performance",
    subtitle: "Premium Coaching",
    price: "349",
    period: "/month",
    features: [
      "Everything in Starter",
      "Video form feedback",
      "Bi-weekly video calls",
      "Advanced nutrition plan",
      "Supplement guidance",
      "Priority messaging",
      "Monthly progress review",
    ],
    highlighted: true,
  },
  {
    name: "VIP Hybrid",
    subtitle: "Elite Coaching",
    price: "599",
    period: "/month",
    features: [
      "Everything in Performance",
      "4x in-person sessions/month",
      "Movement assessment",
      "Hands-on form correction",
      "Lifestyle optimization",
      "Direct phone access",
      "Quarterly strategy session",
      "Full accountability system",
    ],
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <span className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-primary mb-4 block">
            Investment
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wide mb-4">
            Choose Your Path
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Invest in yourself with a coaching plan designed for your goals and lifestyle.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className={`relative rounded-2xl p-8 border transition-all duration-500 ${
                plan.highlighted
                  ? "bg-primary/5 border-primary/40 scale-[1.02] shadow-lg shadow-primary/5"
                  : "bg-card border-border/40 hover:border-primary/20"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-body font-semibold tracking-wider uppercase px-4 py-1 rounded-full flex items-center gap-1.5">
                  <Zap className="w-3 h-3" />
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <p className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-1">
                  {plan.subtitle}
                </p>
                <h3 className="font-heading text-3xl text-foreground tracking-wide">{plan.name}</h3>
              </div>

              <div className="flex items-baseline gap-1 mb-8">
                <span className="font-heading text-5xl text-foreground">${plan.price}</span>
                <span className="font-body text-sm text-muted-foreground">{plan.period}</span>
              </div>

              <div className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span className="font-body text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <a href="#consultation">
                <Button
                  className={`w-full font-body tracking-wide group ${
                    plan.highlighted
                      ? "bg-primary hover:bg-primary/90"
                      : "bg-secondary hover:bg-secondary/80 text-foreground"
                  }`}
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}