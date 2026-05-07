import React from "react";
import { motion } from "framer-motion";
import { Target, Flame, Activity, Shield } from "lucide-react";

const COACH_IMG = "https://media.base44.com/images/public/69ea6f23859789d9f4e346b2/2de4d6212_generated_886ce12b.png";

const pillars = [
  { icon: Activity, label: "Functional Strength" },
  { icon: Target, label: "Mobility & Movement" },
  { icon: Flame, label: "Sustainable Fat Loss" },
  { icon: Shield, label: "Accountability" },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
              <img
                src={COACH_IMG}
                alt="Coach Jovan - Professional portrait"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-4 -right-4 sm:bottom-8 sm:-right-6 bg-card border border-border/50 rounded-xl p-5 backdrop-blur-xl shadow-2xl">
              <p className="font-heading text-4xl text-primary">8+</p>
              <p className="font-body text-xs text-muted-foreground tracking-wider uppercase">Years Coaching</p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-primary mb-4 block">
              About Your Coach
            </span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wide mb-6">
              Meet Your Coach
            </h2>
            <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
              <p>
                I'm Jovan — a functional performance coach dedicated to helping busy professionals 
                move better, build real-world strength, and transform their lifestyle for good.
              </p>
              <p>
                My approach goes beyond aesthetics. I focus on functional strength, mobility, 
                sustainable fat loss, and lifestyle transformation. Every program is built around 
                your life, your goals, and your body.
              </p>
              <p className="text-foreground font-medium italic border-l-2 border-primary pl-4">
                "I help people build a body that not only looks better but performs better in everyday life."
              </p>
            </div>

            {/* Pillars */}
            <div className="grid grid-cols-2 gap-4 mt-10">
              {pillars.map((pillar) => (
                <div
                  key={pillar.label}
                  className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 border border-border/30"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <pillar.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-body text-sm font-medium text-foreground">{pillar.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}