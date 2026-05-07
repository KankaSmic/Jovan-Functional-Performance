import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

const HERO_IMG = "https://media.base44.com/images/public/69ea6f23859789d9f4e346b2/e5dd7bc5d_generated_cc5a9a5e.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="Jovan coaching a client in a premium gym setting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 pt-32 pb-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-body font-medium text-primary tracking-widest uppercase">
              Now Accepting Clients
            </span>
          </motion.div>

          {/* Headline */}
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-foreground leading-[0.95] tracking-wide mb-6">
            Become Stronger,{" "}
            <span className="text-primary">More Functional,</span>{" "}
            and In Shape for Life
          </h1>

          {/* Subheadline */}
          <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-lg">
            Personalized coaching that helps you move better, feel better, and build a body that performs in real life.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a href="#consultation">
              <Button size="lg" className="font-body text-base tracking-wide bg-primary hover:bg-primary/90 px-8 py-6 group">
                Start Coaching
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="#consultation">
              <Button
                size="lg"
                variant="outline"
                className="font-body text-base tracking-wide border-foreground/20 hover:border-primary hover:text-primary px-8 py-6"
              >
                Book Free Consultation
              </Button>
            </a>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex gap-10 mt-16 pt-8 border-t border-border/40"
          >
            {[
              { value: "200+", label: "Clients Coached" },
              { value: "8+", label: "Years Experience" },
              { value: "98%", label: "Client Satisfaction" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-heading text-3xl md:text-4xl text-primary">{stat.value}</p>
                <p className="font-body text-xs text-muted-foreground tracking-wider uppercase mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 rounded-full bg-primary" />
        </div>
      </motion.div>
    </section>
  );
}