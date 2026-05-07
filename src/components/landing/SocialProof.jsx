import React, { useState } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const TRANSFORM_IMG = "https://media.base44.com/images/public/69ea6f23859789d9f4e346b2/826717918_generated_0238eb27.png";

const testimonials = [
  {
    name: "Marcus T.",
    role: "Business Owner, 38",
    quote: "Jovan completely changed how I approach fitness. I've lost 30 lbs, my back pain is gone, and I have more energy than I did in my 20s. This is coaching at the highest level.",
    rating: 5,
  },
  {
    name: "Sarah K.",
    role: "Marketing Director, 34",
    quote: "I was skeptical about online coaching but Jovan proved me wrong. His attention to detail and accountability system is incredible. Down 2 dress sizes and feeling stronger than ever.",
    rating: 5,
  },
  {
    name: "David R.",
    role: "Software Engineer, 42",
    quote: "After years of gym-hopping with zero results, Jovan's functional approach finally clicked. I move better, sleep better, and actually enjoy training now.",
    rating: 5,
  },
  {
    name: "Lisa M.",
    role: "Healthcare Professional, 31",
    quote: "The hybrid coaching model is perfect for my busy schedule. In-person sessions for technique and online plans for everything else. My mobility has improved dramatically.",
    rating: 5,
  },
];

export default function SocialProof() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="results" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <span className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-primary mb-4 block">
            Testimonials
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wide mb-4">
            Real People. Real Results.
          </h2>
        </motion.div>

        {/* Transformation Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden mb-16 aspect-video max-w-4xl mx-auto"
        >
          <img
            src={TRANSFORM_IMG}
            alt="Client transformation results"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <p className="font-heading text-2xl md:text-3xl text-foreground">Transformations That Speak for Themselves</p>
          </div>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-3xl mx-auto">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.5 }}
            className="bg-card border border-border/40 rounded-2xl p-8 md:p-12 text-center relative"
          >
            <Quote className="w-10 h-10 text-primary/20 mx-auto mb-6" />
            <p className="font-body text-lg md:text-xl text-foreground leading-relaxed mb-8 italic">
              "{testimonials[current].quote}"
            </p>
            <div className="flex items-center justify-center gap-1 mb-4">
              {Array(testimonials[current].rating).fill(0).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="font-body font-semibold text-foreground">{testimonials[current].name}</p>
            <p className="font-body text-sm text-muted-foreground">{testimonials[current].role}</p>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full border-border/50 hover:border-primary"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === current ? "bg-primary w-6" : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full border-border/50 hover:border-primary"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}