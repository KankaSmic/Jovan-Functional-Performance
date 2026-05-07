import React from "react";
import { motion } from "framer-motion";
import { Instagram, Play, Heart, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const posts = [
  { type: "Exercise Tips", label: "Kettlebell Form Guide", likes: "2.4k", comments: "182" },
  { type: "Nutrition", label: "Meal Prep Made Simple", likes: "1.8k", comments: "94" },
  { type: "Client Win", label: "Sarah's 12-Week Journey", likes: "3.1k", comments: "247" },
  { type: "Motivation", label: "Why Consistency > Perfection", likes: "4.2k", comments: "312" },
  { type: "Behind The Scenes", label: "Day in the Life", likes: "1.5k", comments: "68" },
  { type: "Mobility", label: "5-Min Morning Routine", likes: "2.9k", comments: "203" },
];

const categoryColors = {
  "Exercise Tips": "bg-primary/20 text-primary",
  "Nutrition": "bg-green-500/20 text-green-400",
  "Client Win": "bg-amber-500/20 text-amber-400",
  "Motivation": "bg-purple-500/20 text-purple-400",
  "Behind The Scenes": "bg-rose-500/20 text-rose-400",
  "Mobility": "bg-teal-500/20 text-teal-400",
};

export default function SocialMedia() {
  return (
    <section className="py-24 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <span className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-primary mb-4 block">
            Stay Connected
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wide mb-4">
            Follow the Journey
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Social media is where education meets accountability. Daily content to help you learn, 
            stay motivated, and see what coaching looks like in real life.
          </p>
        </motion.div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {posts.map((post, i) => (
            <motion.div
              key={post.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group relative aspect-square bg-card border border-border/30 rounded-xl overflow-hidden cursor-pointer hover:border-primary/40 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-secondary via-card to-secondary/80" />
              
              {/* Content Overlay */}
              <div className="relative z-10 h-full flex flex-col justify-between p-4 md:p-5">
                <div className="flex justify-between items-start">
                  <span className={`text-[10px] md:text-xs font-body font-medium tracking-wider uppercase px-2 py-1 rounded-full ${categoryColors[post.type]}`}>
                    {post.type}
                  </span>
                  <Play className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <div>
                  <p className="font-heading text-xl md:text-2xl text-foreground mb-3">{post.label}</p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5">
                      <Heart className="w-3.5 h-3.5 text-muted-foreground" />
                      <span className="font-body text-xs text-muted-foreground">{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MessageCircle className="w-3.5 h-3.5 text-muted-foreground" />
                      <span className="font-body text-xs text-muted-foreground">{post.comments}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="font-body tracking-wide bg-primary hover:bg-primary/90 px-8 py-6 group">
              <Instagram className="mr-2 w-5 h-5" />
              Follow on Instagram
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}