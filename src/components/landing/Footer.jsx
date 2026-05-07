import React from "react";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card/50">
      <div className="max-w-7xl mx-auto px-5 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="font-heading text-xl text-primary-foreground tracking-wider">JF</span>
              </div>
              <div>
                <p className="font-heading text-lg tracking-widest text-foreground leading-none">JOVAN</p>
                <p className="text-[10px] tracking-[0.25em] text-muted-foreground font-body uppercase">
                  Functional Performance
                </p>
              </div>
            </div>
            <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-sm mb-6">
              Move Better. Get Stronger. Live Fully. Premium personal coaching for busy professionals 
              who want to transform their body and lifestyle.
            </p>

            {/* Newsletter */}
            <div className="flex gap-2 max-w-sm">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-secondary/50 border-border/50 font-body text-sm placeholder:text-muted-foreground/60"
              />
              <Button className="bg-primary hover:bg-primary/90 font-body text-sm shrink-0">
                Subscribe
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-foreground mb-4">
              Quick Links
            </p>
            <div className="space-y-3">
              {[
                { label: "About", href: "#about" },
                { label: "Services", href: "#services" },
                { label: "Pricing", href: "#pricing" },
                { label: "Results", href: "#results" },
                { label: "FAQ", href: "#faq" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block font-body text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-foreground mb-4">
              Contact
            </p>
            <div className="space-y-3">
              <a
                href="mailto:hello@jovanfp.com"
                className="flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                hello@jovanfp.com
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                (123) 456-7890
              </a>
              <div className="flex items-center gap-2 font-body text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                Available Worldwide
              </div>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="w-4 h-4" />
                @jovanfp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-border/30 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-muted-foreground">
            © {new Date().getFullYear()} Jovan Functional Performance. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="font-body text-xs text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="font-body text-xs text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}