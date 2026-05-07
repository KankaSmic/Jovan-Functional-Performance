import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, ClipboardList, MessageSquare, BarChart3, Sparkles } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const steps = [
  {
    number: "01",
    icon: Target,
    title: "Define Your Goal",
    description: "We start with a deep-dive consultation to identify exactly what you want to achieve. No cookie-cutter programs — your journey begins with clarity on your unique goals, challenges, and lifestyle.",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Build Your Plan",
    description: "A personalized training and nutrition strategy is created specifically for you. Every exercise, every meal guideline, every detail is tailored to your body, schedule, and preferences.",
  },
  {
    number: "03",
    icon: MessageSquare,
    title: "Daily Support",
    description: "You're never alone in this. Messaging support, video form checks, and accountability touchpoints every week keep you on track and progressing consistently.",
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Track Progress",
    description: "Regular check-ins and data-driven program adjustments ensure you're always moving forward. We celebrate wins, identify opportunities, and refine the approach as you evolve.",
  },
  {
    number: "05",
    icon: Sparkles,
    title: "Transform Sustainably",
    description: "Build lasting habits that fit your lifestyle. This isn't a 12-week crash program — it's a system designed to make you stronger, healthier, and more capable for life.",
  },
];

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-primary mb-4 block">
              The Process
            </span>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-foreground tracking-wide mb-6">
              How to Start Your{" "}
              <span className="text-primary">Coaching Journey</span>
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A proven 5-step process designed to take you from where you are to where you want to be — 
              sustainably, effectively, and with world-class coaching support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-5xl mx-auto px-5">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border/50 md:-translate-x-px" />

            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className={`relative flex items-start gap-8 md:gap-16 mb-16 last:mb-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot on timeline */}
                <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-primary border-4 border-background -translate-x-1.5 md:-translate-x-1.5 top-8 z-10" />

                {/* Content Card */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}>
                  <div className="bg-card border border-border/40 rounded-2xl p-8 hover:border-primary/30 transition-all duration-500 group">
                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <step.icon className="w-6 h-6 text-primary" />
                      </div>
                      <span className="font-heading text-4xl text-primary/30">{step.number}</span>
                    </div>
                    <h3 className="font-heading text-2xl md:text-3xl text-foreground tracking-wide mb-3">
                      {step.title}
                    </h3>
                    <p className="font-body text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-secondary/30">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-4xl md:text-5xl text-foreground tracking-wide mb-6">
              Ready to Start?
            </h2>
            <p className="font-body text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
              Your transformation begins with a single conversation. Let's talk about your goals 
              and build a plan that works for your life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/#consultation">
                <Button size="lg" className="font-body tracking-wide bg-primary hover:bg-primary/90 px-8 py-6 group">
                  Apply Now
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="/#consultation">
                <Button
                  size="lg"
                  variant="outline"
                  className="font-body tracking-wide border-foreground/20 hover:border-primary hover:text-primary px-8 py-6"
                >
                  Schedule Call
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}