import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Results", href: "#results" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-xl border-b border-border/50 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
            <span className="font-heading text-xl text-primary-foreground tracking-wider">JF</span>
          </div>
          <div className="hidden sm:block">
            <p className="font-heading text-lg tracking-widest text-foreground leading-none">JOVAN</p>
            <p className="text-[10px] tracking-[0.25em] text-muted-foreground font-body uppercase">Functional Performance</p>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-body font-medium text-muted-foreground hover:text-foreground transition-colors tracking-wide uppercase"
            >
              {link.label}
            </a>
          ))}
          <Link to="/how-it-works">
            <span className="text-sm font-body font-medium text-muted-foreground hover:text-foreground transition-colors tracking-wide uppercase">
              How It Works
            </span>
          </Link>
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a href="#consultation">
            <Button variant="outline" className="font-body text-sm tracking-wide border-border/60 hover:border-primary hover:text-primary">
              Book Free Call
            </Button>
          </a>
          <a href="#consultation">
            <Button className="font-body text-sm tracking-wide bg-primary hover:bg-primary/90">
              Start Coaching
            </Button>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/98 backdrop-blur-xl border-b border-border"
          >
            <div className="px-5 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-base font-body font-medium text-muted-foreground hover:text-foreground transition-colors tracking-wide uppercase"
                >
                  {link.label}
                </a>
              ))}
              <Link to="/how-it-works" onClick={() => setMobileOpen(false)}>
                <span className="block text-base font-body font-medium text-muted-foreground hover:text-foreground transition-colors tracking-wide uppercase">
                  How It Works
                </span>
              </Link>
              <div className="flex flex-col gap-3 pt-4">
                <a href="#consultation" onClick={() => setMobileOpen(false)}>
                  <Button className="w-full font-body bg-primary hover:bg-primary/90">
                    Start Coaching
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}