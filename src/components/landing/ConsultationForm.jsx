import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, CheckCircle2, Send } from "lucide-react";

export default function ConsultationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", goal: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="consultation" className="py-24 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - CTA Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-primary mb-4 block">
              Let's Start
            </span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wide mb-6">
              Ready to Become Your Strongest Self?
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
              Book your free consultation and take the first step toward a stronger, healthier, 
              more capable body. No commitment, no pressure — just a conversation about your goals.
            </p>

            <div className="space-y-4">
              {[
                "Free 15-minute consultation call",
                "No commitment required",
                "Custom plan discussion",
                "Ask any questions",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="font-body text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {submitted ? (
              <div className="bg-card border border-primary/30 rounded-2xl p-10 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-3xl text-foreground mb-3">Application Received!</h3>
                <p className="font-body text-muted-foreground">
                  Thanks for reaching out. I'll be in touch within 24 hours to schedule your free consultation.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-card border border-border/40 rounded-2xl p-8 space-y-5"
              >
                <h3 className="font-heading text-2xl text-foreground tracking-wide mb-2">
                  Book Your Free Consultation
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    placeholder="Full Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    className="bg-secondary/50 border-border/50 font-body placeholder:text-muted-foreground/60"
                  />
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    className="bg-secondary/50 border-border/50 font-body placeholder:text-muted-foreground/60"
                  />
                </div>

                <Input
                  type="tel"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="bg-secondary/50 border-border/50 font-body placeholder:text-muted-foreground/60"
                />

                <Select onValueChange={(val) => setForm({ ...form, goal: val })}>
                  <SelectTrigger className="bg-secondary/50 border-border/50 font-body text-muted-foreground">
                    <SelectValue placeholder="What's your primary goal?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fat_loss">Fat Loss</SelectItem>
                    <SelectItem value="strength">Build Strength</SelectItem>
                    <SelectItem value="mobility">Improve Mobility</SelectItem>
                    <SelectItem value="general">General Fitness</SelectItem>
                    <SelectItem value="accountability">Accountability</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>

                <Textarea
                  placeholder="Tell me about yourself and your goals (optional)"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="bg-secondary/50 border-border/50 font-body placeholder:text-muted-foreground/60 h-24"
                />

                <Button type="submit" size="lg" className="w-full font-body tracking-wide bg-primary hover:bg-primary/90 py-6 group">
                  <Send className="mr-2 w-4 h-4" />
                  Apply Now
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>

                <p className="text-xs text-muted-foreground text-center font-body">
                  Your information is secure and will never be shared.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}