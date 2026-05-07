import React from "react";
import { motion } from "framer-motion";
import { Video, Dumbbell, Apple, Brain, Smile, Trophy } from "lucide-react";

const contentTypes = [
  { icon: Video, label: "Educational Reels", desc: "Quick-hit training tips and form breakdowns" },
  { icon: Dumbbell, label: "Mobility Tutorials", desc: "Move better, feel better every day" },
  { icon: Apple, label: "Nutrition Guidance", desc: "Simple, sustainable eating strategies" },
  { icon: Brain, label: "Mindset Coaching", desc: "Mental frameworks for lasting change" },
  { icon: Smile, label: "Humor & Personality", desc: "Fitness doesn't have to be boring" },
  { icon: Trophy, label: "Client Wins", desc: "Real results from real people" },
];

export default function ContentStrategy() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-primary mb-4 block">
              Content
            </span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wide mb-6">
              More Than Coaching
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              Building a brand isn't just about training sessions — it's about creating value 
              every single day. From educational content to mindset coaching, every piece of 
              content serves a purpose.
            </p>
            <div className="border-l-2 border-primary pl-6 py-2">
              <p className="font-body text-lg text-foreground font-medium italic">
                Consistent value creates trust.
              </p>
              <p className="font-body text-lg text-primary font-medium italic">
                Trust creates transformation.
              </p>
            </div>
          </motion.div>

          {/* Right - Grid */}
          <div className="grid grid-cols-2 gap-4">
            {contentTypes.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="p-5 rounded-xl bg-card border border-border/40 hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="font-body text-sm font-semibold text-foreground mb-1">{item.label}</p>
                <p className="font-body text-xs text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}